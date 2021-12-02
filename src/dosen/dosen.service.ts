import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dosen } from './dosen.entity';

@Injectable()
export class DosenService {
  constructor(
    @InjectRepository(Dosen)
    private readonly dosenRepository: Repository<Dosen>,
  ) {}

  findAll() {
    return this.dosenRepository.find();
  }
}
