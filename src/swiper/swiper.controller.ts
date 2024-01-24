import { Public } from 'src/decorators';
import { SwiperService } from './swiper.service';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import {
  Pagination,
  PaginationParams,
} from 'src/decorators/pagination.decorator';

@Public()
@ApiTags('swiper')
@Controller('swiper')
export class SwiperController {
  constructor(private readonly swiperService: SwiperService) {}

  @Get()
  findAll(@Pagination() pagination: PaginationParams) {
    return this.swiperService.findAll({
      page: pagination.current,
      limit: pagination.pageSize,
    });
  }

  /**https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner1.png
https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner2.png
https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner3.png
https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner4.png
https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner5.png
https://cdn-we-retail.ym.tencent.com/tsr/home/v2/banner6.png */
}
