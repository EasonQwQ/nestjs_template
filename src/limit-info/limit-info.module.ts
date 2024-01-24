import { Module } from '@nestjs/common';
import { LimitInfoService } from './limit-info.service';
import { LimitInfoController } from './limit-info.controller';
import { LimitInfoEntity } from './entities/limit-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LimitInfoEntity])],
  controllers: [LimitInfoController],
  providers: [LimitInfoService],
})
export class LimitInfoModule {}
