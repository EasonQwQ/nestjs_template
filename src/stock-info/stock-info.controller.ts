import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockInfoService } from './stock-info.service';
import { CreateStockInfoDto } from './dto/create-stock-info.dto';
import { UpdateStockInfoDto } from './dto/update-stock-info.dto';

@Controller('stock-info')
export class StockInfoController {
  constructor(private readonly stockInfoService: StockInfoService) {}

  @Post()
  create(@Body() createStockInfoDto: CreateStockInfoDto) {
    return this.stockInfoService.create(createStockInfoDto);
  }

  @Get()
  findAll() {
    return this.stockInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockInfoDto: UpdateStockInfoDto) {
    return this.stockInfoService.update(+id, updateStockInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockInfoService.remove(+id);
  }
}
