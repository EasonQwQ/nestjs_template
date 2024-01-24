import { Injectable } from '@nestjs/common';
import { CreateStockInfoDto } from './dto/create-stock-info.dto';
import { UpdateStockInfoDto } from './dto/update-stock-info.dto';

@Injectable()
export class StockInfoService {
  create(createStockInfoDto: CreateStockInfoDto) {
    return 'This action adds a new stockInfo';
  }

  findAll() {
    return `This action returns all stockInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockInfo`;
  }

  update(id: number, updateStockInfoDto: UpdateStockInfoDto) {
    return `This action updates a #${id} stockInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockInfo`;
  }
}
