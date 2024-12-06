import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ToysModule } from './toys/toys.module';
import { ChildrenModule } from './children/children.module';

@Module({
  imports: [ToysModule, ChildrenModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
