import { JatekDto } from './dto/create-toy.dto';
import { JatekFrissitesDto } from './dto/update-toy.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ToysService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(CreateToyDto: JatekDto): import(".prisma/client").Prisma.Prisma__JatekClient<{
        megnevezes: string;
        anyag: import(".prisma/client").$Enums.Anyag;
        suly: number;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        megnevezes: string;
        anyag: import(".prisma/client").$Enums.Anyag;
        suly: number;
        id: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__JatekClient<{
        megnevezes: string;
        anyag: import(".prisma/client").$Enums.Anyag;
        suly: number;
        id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, UpdateToyDto: JatekFrissitesDto): import(".prisma/client").Prisma.Prisma__JatekClient<{
        megnevezes: string;
        anyag: import(".prisma/client").$Enums.Anyag;
        suly: number;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__JatekClient<{
        megnevezes: string;
        anyag: import(".prisma/client").$Enums.Anyag;
        suly: number;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
