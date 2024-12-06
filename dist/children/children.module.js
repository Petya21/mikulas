"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildrenModule = void 0;
const common_1 = require("@nestjs/common");
const children_service_1 = require("./children.service");
const children_controller_1 = require("./children.controller");
const prisma_service_1 = require("../prisma.service");
let ChildrenModule = class ChildrenModule {
};
exports.ChildrenModule = ChildrenModule;
exports.ChildrenModule = ChildrenModule = __decorate([
    (0, common_1.Module)({
        controllers: [children_controller_1.ChildrenController],
        providers: [children_service_1.ChildrenService, prisma_service_1.PrismaService],
    })
], ChildrenModule);
//# sourceMappingURL=children.module.js.map