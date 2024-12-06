import { GyerekDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ChildrenService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(GyerekDto: GyerekDto): import(".prisma/client").Prisma.Prisma__GyerekClient<{
        id: number;
        nev: string;
        cim: string;
        joVolt: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nev: string;
        cim: string;
        joVolt: boolean;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GyerekClient<{
        id: number;
        nev: string;
        cim: string;
        joVolt: boolean;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, UpdateChildDto: UpdateChildDto): import(".prisma/client").Prisma.Prisma__GyerekClient<{
        id: number;
        nev: string;
        cim: string;
        joVolt: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GyerekClient<{
        id: number;
        nev: string;
        cim: string;
        joVolt: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
