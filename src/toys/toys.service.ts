import { Injectable } from '@nestjs/common';
import { JatekDto } from './dto/create-toy.dto';
import { JatekFrissitesDto } from './dto/update-toy.dto';
import { PrismaService } from 'src/prisma.service';
 
@Injectable()
export class ToysService {
  constructor(private readonly prisma: PrismaService) {}
 
  create(CreateToyDto: JatekDto) {
    return this.prisma.jatek.create({
      data: {
        megnevezes: CreateToyDto.megnevezes,
        anyag: CreateToyDto.anyag,
        suly: CreateToyDto.suly,
    }})
  }
 
  findAll() {
    return this.prisma.jatek.findMany();
  }
 
  findOne(id: number) {
    return this.prisma.jatek.findFirst({
      where: {
        id: id,
      }
    });
  }
 
  update(id: number, UpdateToyDto: JatekFrissitesDto) {
    return this.prisma.jatek.update({
      where: {
        id: id,
      },
      data: {
        megnevezes: UpdateToyDto.megnevezes,
        anyag: UpdateToyDto.anyag,
        suly: UpdateToyDto.suly,
      },
    });
  }
 
  remove(id: number) {
    return this.prisma.jatek.delete({where: {id:id}});
  }
}
