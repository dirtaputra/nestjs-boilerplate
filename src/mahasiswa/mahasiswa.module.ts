import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MahasiswaController } from './mahasiswa.controller';
import { Mahasiswa } from './mahasiswa.entity';
import { MahasiswaService } from './mahasiswa.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mahasiswa])],
  controllers: [MahasiswaController],
  providers: [MahasiswaService],
  exports: [MahasiswaService],
})
export class MahasiswaModule {}
