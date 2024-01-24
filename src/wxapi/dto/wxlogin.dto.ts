import { IsNotEmpty } from 'class-validator';

export class WxLoginDto {
  @IsNotEmpty({ message: 'code 不能为空' })
  code: string;
}
