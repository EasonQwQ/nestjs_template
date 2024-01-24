import { Module } from '@nestjs/common';
import { WxapiController } from './wxapi.controller';
import { WxapiService } from './wxapi.service';
import { HttpModule } from '@nestjs/axios';
import { UserModule } from 'src/user/user.module';
import { SwiperModule } from 'src/swiper/swiper.module';
import { TabListModule } from 'src/tab-list/tab-list.module';

@Module({
  imports: [HttpModule, UserModule, SwiperModule, TabListModule],
  controllers: [WxapiController],
  providers: [WxapiService],
})
export class WxapiModule {}
