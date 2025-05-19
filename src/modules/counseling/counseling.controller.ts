import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { SkipAuth } from 'src/common/decorators';

import { CounselingService } from './counseling.service';

import { CreateCounselingRequestDto, CreateCounselingResponseDto } from './dto';
@SkipAuth()
@ApiTags('counseling')
@Controller('counseling')
export class CounselingController {
  constructor(private readonly counselingService: CounselingService) {}

  @Post()
  @ApiOperation({ summary: '상담 데이터 생성' })
  @ApiResponse({
    status: 201,
    description: '상담 데이터가 성공적으로 생성됨',
    type: CreateCounselingResponseDto,
  })
  async create(
    @Body() body: CreateCounselingRequestDto,
  ): Promise<CreateCounselingResponseDto> {
    const reply = this.counselingService.generateReply(body);
    return reply;
  }
}
