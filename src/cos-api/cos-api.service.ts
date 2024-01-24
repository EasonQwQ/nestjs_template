import { Injectable } from '@nestjs/common';
import * as COS from 'cos-nodejs-sdk-v5';

@Injectable()
export class CosApiService {
  private cos = null;
  constructor() {
    this.cos = new COS({
      SecretId: process.env.COS_SECRET_ID,
      SecretKey: process.env.COS_SECRET_KEY,
    });
  }

  getPresignedUrl(fileName: string) {
    return new Promise((resolve, reject) => {
      this.cos.getObjectUrl(
        {
          Bucket: process.env.COS_BUCKET,
          Region: process.env.COS_REGION,
          Key: fileName,
          Sign: true,
          Protocol: 'https',
          Method: 'PUT',
        },
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        },
      );
    });
  }
}
