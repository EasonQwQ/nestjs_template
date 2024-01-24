import { Injectable } from '@nestjs/common';
import { BaseService, FindAllResult } from 'src/base/base.service';
import { SwiperEntity } from './swiper.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SwiperService extends BaseService<SwiperEntity> {
  constructor(
    @InjectRepository(SwiperEntity)
    private readonly swiperRepository: Repository<SwiperEntity>,
  ) {
    super(swiperRepository);
  }

  async findAll({
    page,
    limit,
  }: {
    page?: number;
    limit?: number;
  }): Promise<FindAllResult<SwiperEntity>> {
    const res = await super.findAll({
      page,
      limit,
    });
    console.log('🚀 ~ SwiperService ~ findAll ~ res:', res);
    return super.findAll();
  }
}
