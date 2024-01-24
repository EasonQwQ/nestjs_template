import { Injectable } from '@nestjs/common';
import { CreateTabListDto } from './dto/create-tab-list.dto';
import { UpdateTabListDto } from './dto/update-tab-list.dto';
import { TabListEntity } from './entities/tab-list.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService, FindAllResult } from 'src/base/base.service';

@Injectable()
export class TabListService extends BaseService<TabListEntity> {
  constructor(
    @InjectRepository(TabListEntity)
    private readonly tabListRepository: Repository<TabListEntity>,
  ) {
    super(tabListRepository);
  }

  create(createTabListDto: CreateTabListDto): Promise<TabListEntity> {
    const tabListEntity: TabListEntity =
      this.tabListRepository.create(createTabListDto);
    return this.tabListRepository.save(tabListEntity);
  }

  async findAll({ page, limit }): Promise<FindAllResult<TabListEntity>> {
    const res = await super.findAll({
      page,
      limit,
    });
    return super.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} tabList`;
  }

  update(id: number, updateTabListDto: UpdateTabListDto) {
    return `This action updates a #${id} tabList`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabList`;
  }
}
