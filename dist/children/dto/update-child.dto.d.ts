import { GyerekDto } from './create-child.dto';
declare const UpdateChildDto_base: import("@nestjs/mapped-types").MappedType<Partial<GyerekDto>>;
export declare class UpdateChildDto extends UpdateChildDto_base {
    nev: string;
    cim: string;
    joVolt: boolean;
}
export {};
