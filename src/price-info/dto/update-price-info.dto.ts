import { PartialType } from '@nestjs/swagger';
import { CreatePriceInfoDto } from './create-price-info.dto';

export class UpdatePriceInfoDto extends PartialType(CreatePriceInfoDto) {}
