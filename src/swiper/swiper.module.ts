import { Module } from '@nestjs/common';
import { SwiperService } from './swiper.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwiperEntity } from './swiper.entity';
import { SwiperController } from './swiper.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SwiperEntity])],
  providers: [SwiperService],
  controllers: [SwiperController],
  exports: [SwiperService],
})
export class SwiperModule {}
