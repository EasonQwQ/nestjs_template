import { Controller, Get, Query } from '@nestjs/common';
import { CosApiService } from './cos-api.service';
import { Public } from 'src/decorators';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
@Public()
@Controller('cos-api')
@ApiTags('cos-api')
export class CosApiController {
  constructor(private readonly cosApiService: CosApiService) {}

  // 获取临时上传预签名
  @ApiQuery({ name: 'fileName', type: String })
  @ApiResponse({
    status: 200,
    description: '获取临时上传预签名',
    type: String,
  })
  @Get('getPresignedUrl')
  async getUploadSign(@Query('fileName') fileName: string) {
    return this.cosApiService.getPresignedUrl(fileName);
  }
}
