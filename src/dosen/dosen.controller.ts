import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DosenService } from './dosen.service';

@ApiTags('Dosen')
@Controller('dosen')
export class DosenController {
  constructor(private readonly dosenService: DosenService) {}

  @Get()
  async findAll() {
    return {
      data: await this.dosenService.findAll(),
    };
  }
}
