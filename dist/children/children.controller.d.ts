import { ChildrenService } from './children.service';
import { GyerekDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
export declare class ChildrenController {
    private readonly childrenService;
    constructor(childrenService: ChildrenService);
    create(createChildDto: GyerekDto): import(".prisma/client").Prisma.Prisma__GyerekClient<{
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__GyerekClient<{
        id: number;
        nev: string;
        cim: string;
        joVolt: boolean;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateChildDto: UpdateChildDto): import(".prisma/client").Prisma.Prisma__GyerekClient<{
        id: number;
        nev: string;
        cim: string;
        joVolt: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__GyerekClient<{
        id: number;
        nev: string;
        cim: string;
        joVolt: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
