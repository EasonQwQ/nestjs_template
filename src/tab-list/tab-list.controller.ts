import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TabListService } from './tab-list.service';
import { CreateTabListDto } from './dto/create-tab-list.dto';
import { UpdateTabListDto } from './dto/update-tab-list.dto';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators';
import {
  Pagination,
  PaginationParams,
} from 'src/decorators/pagination.decorator';

@Public()
@ApiTags('tab-lists')
@Controller('tab-list')
export class TabListController {
  constructor(private readonly tabListService: TabListService) {}

  @Post()
  create(@Body() createTabListDto: CreateTabListDto) {
    return this.tabListService.create(createTabListDto);
  }

  @Get()
  findAll(@Pagination() pagination: PaginationParams) {
    return this.tabListService.findAll({
      page: pagination.current,
      limit: pagination.pageSize,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabListDto: UpdateTabListDto) {
    return this.tabListService.update(+id, updateTabListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabListService.remove(+id);
  }
}
