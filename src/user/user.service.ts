// user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  async login(username: string, password: string) {
    const user = await this.userRepository.findOne({
      where: {
        username,
      },
    });
    console.log('🚀 ~ UserService ~ login ~ user:', user);
    if (!user) {
      return null;
    }
    if (user.password === password) {
      return user;
    }
  }
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(dto: UserDto): Promise<UserEntity> {
    const userEntity: UserEntity = plainToClass(UserEntity, dto);
    // 保存到数据库
    const savedUser = await this.userRepository.save(userEntity);
    return savedUser;
  }

  getUser(id: number): UserEntity | PromiseLike<UserEntity> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findOneByOpenidOrCreate(openid: string) {
    let user = await this.userRepository.findOne({
      where: {
        openid,
      },
    });
    if (!user) {
      const userEntity = await this.userRepository.create({
        openid,
        _tags: JSON.stringify([]),
        _geographic: JSON.stringify({
          province: { label: '', key: '' },
          city: { label: '', key: '' },
        }),
      });
      user = await this.userRepository.save(userEntity);
    }
    return user;
  }
}
