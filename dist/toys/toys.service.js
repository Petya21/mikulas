"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToysService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ToysService = class ToysService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(CreateToyDto) {
        return this.prisma.jatek.create({
            data: {
                megnevezes: CreateToyDto.megnevezes,
                anyag: CreateToyDto.anyag,
                suly: CreateToyDto.suly,
            }
        });
    }
    findAll() {
        return this.prisma.jatek.findMany();
    }
    findOne(id) {
        return this.prisma.jatek.findFirst({
            where: {
                id: id,
            }
        });
    }
    update(id, UpdateToyDto) {
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
    remove(id) {
        return this.prisma.jatek.delete({ where: { id: id } });
    }
};
exports.ToysService = ToysService;
exports.ToysService = ToysService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ToysService);
//# sourceMappingURL=toys.service.js.map