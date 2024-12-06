import { Injectable } from '@nestjs/common';
import { GyerekDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChildrenService {
  constructor(private readonly prisma: PrismaService) {}

  create(GyerekDto: GyerekDto) {
    return this.prisma.gyerek.create({
      data: {
        nev: GyerekDto.nev,
        cim: GyerekDto.cim,
        joVolt: GyerekDto.joVolt,
    }})
  }
 
  findAll() {
    return this.prisma.gyerek.findMany();
  }
 
  findOne(id: number) {
    return this.prisma.gyerek.findFirst({
      where: {
        id: id,
      }
    });
  }
 
  update(id: number, UpdateChildDto: UpdateChildDto) {
    return this.prisma.gyerek.update({
      where: {
        id: id,
      },
      data: {
        nev: UpdateChildDto.nev,
        cim: UpdateChildDto.cim,
        joVolt: UpdateChildDto.joVolt,
      },
    });
  }
 
  remove(id: number) {
    return this.prisma.gyerek.delete({where: {id:id}});
  }
}
