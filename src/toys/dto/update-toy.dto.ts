import { IsString, IsEnum, IsNumber, IsOptional, Min, Max } from 'class-validator';
import { Anyag } from '@prisma/client';

export class JatekFrissitesDto {
  @IsOptional()
  @IsString()
  megnevezes?: string;

  @IsOptional()
  @IsEnum(Anyag)
  anyag?: Anyag;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1000)
  suly?: number;
}
