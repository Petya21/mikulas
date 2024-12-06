import { ToysService } from './toys.service';
import { JatekDto } from './dto/create-toy.dto';
import { JatekFrissitesDto } from './dto/update-toy.dto';
export declare class JatekokController {
    private readonly jatekokSzerviz;
    constructor(jatekokSzerviz: ToysService);
    osszesJatek(): import(".prisma/client").Prisma.PrismaPromise<{
        megnevezes: string;
        anyag: import(".prisma/client").$Enums.Anyag;
        suly: number;
        id: number;
    }[]>;
    egyJatek(id: number): import(".prisma/client").Prisma.Prisma__JatekClient<{
        megnevezes: string;
        anyag: import(".prisma/client").$Enums.Anyag;
        suly: number;
        id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    ujJatek(data: JatekDto): import(".prisma/client").Prisma.Prisma__JatekClient<{
        megnevezes: string;
        anyag: import(".prisma/client").$Enums.Anyag;
        suly: number;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    jatekModositasa(id: number, data: JatekFrissitesDto): import(".prisma/client").Prisma.Prisma__JatekClient<{
        megnevezes: string;
        anyag: import(".prisma/client").$Enums.Anyag;
        suly: number;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    jatekTorlese(id: number): import(".prisma/client").Prisma.Prisma__JatekClient<{
        megnevezes: string;
        anyag: import(".prisma/client").$Enums.Anyag;
        suly: number;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
