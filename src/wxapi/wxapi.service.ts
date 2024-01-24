import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WxapiService {
  constructor() {}

  async getSessionAndOpenid(code: string) {
    const url = 'https://api.weixin.qq.com/sns/jscode2session';
    const appid = process.env.WX_APP_ID;
    const secret = process.env.WX_APP_SECRET;
    const params = {
      appid,
      secret,
      js_code: code,
      grant_type: 'authorization_code',
    };
    const res = await axios.get(url, { params });
    if (res.data.errcode) {
      throw new Error(res.data.errmsg?.split(',')?.[0]);
    }
    return res.data;
  }
}
