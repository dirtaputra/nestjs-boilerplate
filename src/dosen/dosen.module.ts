import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DosenController } from './dosen.controller';
import { Dosen } from './dosen.entity';
import { DosenService } from './dosen.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dosen])],
  controllers: [DosenController],
  providers: [DosenService],
  exports: [DosenService],
})
export class DosenModule {}
