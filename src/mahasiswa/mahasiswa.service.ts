import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createMahasiswaDto } from './dto/create.dto';
import { updateMahasiswaDto } from './dto/update.dto';
import { Mahasiswa } from './mahasiswa.entity';

@Injectable()
export class MahasiswaService {
  constructor(
    @InjectRepository(Mahasiswa)
    private readonly mahasiswaRepository: Repository<Mahasiswa>,
  ) {}

  findAll() {
    return this.mahasiswaRepository.find();
  }

  findOne(id: number) {
    return this.mahasiswaRepository.findOneOrFail(id);
  }

  create(data: createMahasiswaDto) {
    const mahasiswa = new Mahasiswa();
    mahasiswa.name = data.name;
    mahasiswa.status = data.status;
    return this.mahasiswaRepository.save(mahasiswa);
  }

  update(data: updateMahasiswaDto, id: number) {
    return this.mahasiswaRepository.save({ ...data, id: Number(id) });
  }

  delete(id: number) {
    return this.mahasiswaRepository.delete(id);
  }
}
