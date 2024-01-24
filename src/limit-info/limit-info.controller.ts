import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LimitInfoService } from './limit-info.service';
import { CreateLimitInfoDto } from './dto/create-limit-info.dto';
import { UpdateLimitInfoDto } from './dto/update-limit-info.dto';

@Controller('limit-info')
export class LimitInfoController {
  constructor(private readonly limitInfoService: LimitInfoService) {}

  @Post()
  create(@Body() createLimitInfoDto: CreateLimitInfoDto) {
    return this.limitInfoService.create(createLimitInfoDto);
  }

  @Get()
  findAll() {
    return this.limitInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.limitInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLimitInfoDto: UpdateLimitInfoDto) {
    return this.limitInfoService.update(+id, updateLimitInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.limitInfoService.remove(+id);
  }
}
