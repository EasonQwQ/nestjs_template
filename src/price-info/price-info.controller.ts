import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PriceInfoService } from './price-info.service';
import { CreatePriceInfoDto } from './dto/create-price-info.dto';
import { UpdatePriceInfoDto } from './dto/update-price-info.dto';

@Controller('price-info')
export class PriceInfoController {
  constructor(private readonly priceInfoService: PriceInfoService) {}

  @Post()
  create(@Body() createPriceInfoDto: CreatePriceInfoDto) {
    return this.priceInfoService.create(createPriceInfoDto);
  }

  @Get()
  findAll() {
    return this.priceInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.priceInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePriceInfoDto: UpdatePriceInfoDto) {
    return this.priceInfoService.update(+id, updatePriceInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.priceInfoService.remove(+id);
  }
}
