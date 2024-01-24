import { PartialType } from '@nestjs/swagger';
import { CreateTabListDto } from './create-tab-list.dto';

export class UpdateTabListDto extends PartialType(CreateTabListDto) {}
