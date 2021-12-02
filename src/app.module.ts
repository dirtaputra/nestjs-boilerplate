import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { DosenModule } from './dosen/dosen.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'mahasiswa',
      password: '',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MahasiswaModule,
    DosenModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
