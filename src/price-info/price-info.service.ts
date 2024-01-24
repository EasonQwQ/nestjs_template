import { Injectable } from '@nestjs/common';
import { CreatePriceInfoDto } from './dto/create-price-info.dto';
import { UpdatePriceInfoDto } from './dto/update-price-info.dto';

@Injectable()
export class PriceInfoService {
  create(createPriceInfoDto: CreatePriceInfoDto) {
    return 'This action adds a new priceInfo';
  }

  findAll() {
    return `This action returns all priceInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} priceInfo`;
  }

  update(id: number, updatePriceInfoDto: UpdatePriceInfoDto) {
    return `This action updates a #${id} priceInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} priceInfo`;
  }
}
