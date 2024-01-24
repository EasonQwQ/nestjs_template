import { Module } from '@nestjs/common';
import { TabListService } from './tab-list.service';
import { TabListController } from './tab-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabListEntity } from './entities/tab-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabListEntity])],
  controllers: [TabListController],
  providers: [TabListService],
  exports: [TabListService],
})
export class TabListModule {}
