import { Module } from '@nestjs/common';
import { StockInfoService } from './stock-info.service';
import { StockInfoController } from './stock-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockInfoEntity } from './entities/stock-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StockInfoEntity])],
  controllers: [StockInfoController],
  providers: [StockInfoService],
})
export class StockInfoModule {}
