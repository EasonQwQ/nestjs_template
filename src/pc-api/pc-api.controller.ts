import { UserService } from 'src/user/user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PcApiService } from './pc-api.service';
import { Public } from 'src/decorators';

@Public()
@Controller('pc-api')
export class PcApiController {
constructor(
    private readonly pcApiService: PcApiService,
    private readonly UserService: UserService,
  ) {}

  @Post('login/account')
  async login(@Body() body: any) {
    const { password, username, type } = body;
    const user = await this.UserService.login(username, password);
    console.log('🚀 ~ PcApiController ~ login ~ body:', body);
    return {
      status: 'ok',
      type,
      currentAuthority: 'admin',
    };
  }
}
