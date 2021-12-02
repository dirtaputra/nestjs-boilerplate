import { ApiProperty } from '@nestjs/swagger';

export class createMahasiswaDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  status: boolean;
}
