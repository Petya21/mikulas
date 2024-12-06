import { PartialType } from '@nestjs/mapped-types';
import { GyerekDto } from './create-child.dto';
import { IsString, IsBoolean } from 'class-validator';


export class UpdateChildDto extends PartialType(GyerekDto) {
    @IsString()
    nev: string;
  
    @IsString()
    cim: string;
  
    @IsBoolean()
    joVolt: boolean;
}
