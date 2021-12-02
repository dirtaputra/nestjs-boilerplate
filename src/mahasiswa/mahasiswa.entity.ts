import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mahasiswa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  status: boolean;
}
