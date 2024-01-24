import { Module } from '@nestjs/common';
import { PcApiService } from './pc-api.service';
import { PcApiController } from './pc-api.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [PcApiController],
  providers: [PcApiService],
  imports: [UserModule],
})
export class PcApiModule {}
