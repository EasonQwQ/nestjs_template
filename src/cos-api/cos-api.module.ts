import { Module } from '@nestjs/common';
import { CosApiService } from './cos-api.service';
import { CosApiController } from './cos-api.controller';

@Module({
  controllers: [CosApiController],
  providers: [CosApiService],
})
export class CosApiModule {}
