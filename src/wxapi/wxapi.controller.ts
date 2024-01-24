import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WxapiService } from './wxapi.service';
import { WxLoginDto } from './dto/wxlogin.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Public } from 'src/decorators';
import { SwiperService } from 'src/swiper/swiper.service';
import { TabListService } from 'src/tab-list/tab-list.service';
@ApiTags('wxapi')
@Controller('wxapi')
export class WxapiController {
  constructor(
    private readonly wxapiService: WxapiService,
    private readonly userService: UserService,
    // jwtService
    private readonly jwtService: JwtService,
    // swiperService
    private readonly SwiperService: SwiperService,
    //TabListService
    private readonly TabListService: TabListService,
  ) {}

  @Public()
  @Get('checkSession')
  async checkSession(@Query('code') code: string) {
    const res: any = await this.wxapiService.getSessionAndOpenid(code);
    console.log(
      '🚀 ~ file: wxapi.controller.ts:21 ~ WxapiController ~ checkSession ~ res:',
      res,
    );
  }

  @Public()
  @Get('wxlogin')
  async wxlogin(@Query(new ValidationPipe()) wxLoginDto: WxLoginDto) {
    const { code } = wxLoginDto;
    const res: any = await this.wxapiService.getSessionAndOpenid(code);
    const { openid } = res;
    // 判断这个openid是否存在于数据库中 如果存在就直接返回jwt 如果不存在就创建一个用户
    if (!openid) {
      throw new BadRequestException('登录失败');
    }
    const user = await this.userService.findOneByOpenidOrCreate(openid);
    if (!user) {
      throw new BadRequestException('登录失败');
    }
    const payload = {
      id: user.id,
      openid: user.openid,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
      uid: user.id,
    };
  }

  @Get('check-token')
  async checkToken() {
    return 'Auth success';
  }

  @Public()
  @Get('fetch-home')
  async fetchHome() {
    const { list: swiperList } = await this.SwiperService.findAll({
      page: 1,
      limit: 10,
    });
    const { list: tabList } = await this.TabListService.findAll({
      page: 1,
      limit: 10,
    });
    return {
      swiper: swiperList?.map((item) => item.imageUrl),
      tabList: tabList?.map((item) => {
        return {
          text: item.text,
          key: item.key,
        };
      }),
      activityImg: `${process.env.WXCDN}/activity/banner.png`,
    };
  }
}
