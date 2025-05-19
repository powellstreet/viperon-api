import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCounselingRequestDto {
  @ApiProperty({ description: '상담 메시지', type: String })
  @IsString()
  message: string;
}
export class CreateCounselingResponseDto {}
