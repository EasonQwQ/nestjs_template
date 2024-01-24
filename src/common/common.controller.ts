import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CommonService } from './common.service';
import { createWorker } from 'tesseract.js';
import { Public } from 'src/decorators';
import { ApiTags } from '@nestjs/swagger';
import { createReadStream, readFileSync } from 'fs';
import { join } from 'path';
import axios from 'axios';

@Public()
@ApiTags('common')
@Controller('common')
export class CommonController {
  constructor(private readonly commonService: CommonService) {}

  // async ocr() {
  //   const worker = await createWorker('eng');
  //   const imagePath = join(__dirname, '../assets/pic.jpg'); // 路径可能需要根据你的项目结构进行调整
  //   const image = readFileSync(imagePath);
  //   const ret = await worker.recognize(image);
  //   console.log(ret.data.text);
  //   await worker.terminate();
  // }

  @Post('ocr')
  async ocr(@Body('url') url: string) {
    if (!url) {
      return new Error('url不能为空');
    }
    const response = await axios.get('https://api.ocr.space/parse/imageurl', {
      params: {
        apikey: 'K87092576788957', // 你需要在ocr.space注册并获取API密钥
        url: url, // 你的图片的URL
        language: 'eng',
        isTable: true,
        OCREngine: 3,
      },
    });
    return response.data;
  }
}
