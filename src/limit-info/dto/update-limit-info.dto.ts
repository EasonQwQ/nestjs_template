import { PartialType } from '@nestjs/swagger';
import { CreateLimitInfoDto } from './create-limit-info.dto';

export class UpdateLimitInfoDto extends PartialType(CreateLimitInfoDto) {}
