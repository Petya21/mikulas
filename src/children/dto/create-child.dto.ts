import { IsString, IsBoolean } from 'class-validator';

export class GyerekDto {
  @IsString()
  nev: string;

  @IsString()
  cim: string;

  @IsBoolean()
  joVolt: boolean;
}
