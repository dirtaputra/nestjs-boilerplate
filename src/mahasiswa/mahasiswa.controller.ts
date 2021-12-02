import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createMahasiswaDto } from './dto/create.dto';
import { updateMahasiswaDto } from './dto/update.dto';
import { MahasiswaService } from './mahasiswa.service';

@Controller('mahasiswa')
export class MahasiswaController {
  constructor(private readonly mahasiswaService: MahasiswaService) {}

  @Get()
  async findAll() {
    return {
      data: await this.mahasiswaService.findAll(),
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return {
      data: await this.mahasiswaService.findOne(id),
    };
  }

  @Post()
  async create(@Body() data: createMahasiswaDto) {
    return {
      data: await this.mahasiswaService.create(data),
    };
  }

  @Put(':id')
  async update(@Body() data: updateMahasiswaDto, @Param('id') id: number) {
    return {
      data: await this.mahasiswaService.update(data, id),
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.mahasiswaService.delete(id);
    return {
      status: 'success',
      message: 'success delete data',
    };
  }
}
