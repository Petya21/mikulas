import { IsString, IsEnum, IsNumber, Min, Max } from 'class-validator';
import { Anyag } from '@prisma/client';

export class JatekDto {
  @IsString()
  megnevezes: string;

  @IsEnum(Anyag)
  anyag: Anyag;

  @IsNumber()
  @Min(0)
  @Max(1000)
  suly: number;
}
