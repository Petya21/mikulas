import { Module } from '@nestjs/common';
import { ToysService } from './toys.service';
import { JatekokController } from './toys.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [JatekokController],
  providers: [ToysService, PrismaService],
})
export class ToysModule {}
