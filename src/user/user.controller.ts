// user.controller.ts

import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('createUser')
  async createUser(@Body() userDto: UserDto): Promise<UserEntity> {
    return this.userService.createUser(userDto);
  }
  @Get('getUser')
  async getUser(): Promise<UserEntity> {
    return this.userService.getUser(1);
  }
}
