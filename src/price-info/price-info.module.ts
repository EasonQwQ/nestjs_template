import { Module } from '@nestjs/common';
import { PriceInfoService } from './price-info.service';
import { PriceInfoController } from './price-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceInfoEntity } from './entities/price-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PriceInfoEntity])],
  controllers: [PriceInfoController],
  providers: [PriceInfoService],
})
export class PriceInfoModule {}
