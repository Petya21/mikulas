import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ToysService } from './toys.service';
import { JatekDto } from './dto/create-toy.dto';
import { JatekFrissitesDto } from './dto/update-toy.dto';

@Controller('toys')
export class JatekokController {
  constructor(private readonly jatekokSzerviz: ToysService) {}

  @Get()
  osszesJatek() {
    return this.jatekokSzerviz.findAll();
  }

  @Get(':id')
  egyJatek(@Param('id') id: number) {
    return this.jatekokSzerviz.findOne(Number(id));
  }

  @Post()
  ujJatek(@Body() data: JatekDto) {
    return this.jatekokSzerviz.create(data);
  }

  @Patch(':id')
  jatekModositasa(@Param('id') id: number, @Body() data: JatekFrissitesDto) {
    return this.jatekokSzerviz.update(Number(id), data);
  }

  @Delete(':id')
  jatekTorlese(@Param('id') id: number) {
    return this.jatekokSzerviz.remove(Number(id));
  }
}
