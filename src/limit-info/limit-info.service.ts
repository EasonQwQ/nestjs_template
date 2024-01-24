import { Injectable } from '@nestjs/common';
import { CreateLimitInfoDto } from './dto/create-limit-info.dto';
import { UpdateLimitInfoDto } from './dto/update-limit-info.dto';

@Injectable()
export class LimitInfoService {
  create(createLimitInfoDto: CreateLimitInfoDto) {
    return 'This action adds a new limitInfo';
  }

  findAll() {
    return `This action returns all limitInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} limitInfo`;
  }

  update(id: number, updateLimitInfoDto: UpdateLimitInfoDto) {
    return `This action updates a #${id} limitInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} limitInfo`;
  }
}
