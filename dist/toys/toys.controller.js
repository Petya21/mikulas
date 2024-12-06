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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JatekokController = void 0;
const common_1 = require("@nestjs/common");
const toys_service_1 = require("./toys.service");
const create_toy_dto_1 = require("./dto/create-toy.dto");
const update_toy_dto_1 = require("./dto/update-toy.dto");
let JatekokController = class JatekokController {
    constructor(jatekokSzerviz) {
        this.jatekokSzerviz = jatekokSzerviz;
    }
    osszesJatek() {
        return this.jatekokSzerviz.findAll();
    }
    egyJatek(id) {
        return this.jatekokSzerviz.findOne(Number(id));
    }
    ujJatek(data) {
        return this.jatekokSzerviz.create(data);
    }
    jatekModositasa(id, data) {
        return this.jatekokSzerviz.update(Number(id), data);
    }
    jatekTorlese(id) {
        return this.jatekokSzerviz.remove(Number(id));
    }
};
exports.JatekokController = JatekokController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JatekokController.prototype, "osszesJatek", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], JatekokController.prototype, "egyJatek", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_toy_dto_1.JatekDto]),
    __metadata("design:returntype", void 0)
], JatekokController.prototype, "ujJatek", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_toy_dto_1.JatekFrissitesDto]),
    __metadata("design:returntype", void 0)
], JatekokController.prototype, "jatekModositasa", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], JatekokController.prototype, "jatekTorlese", null);
exports.JatekokController = JatekokController = __decorate([
    (0, common_1.Controller)('toys'),
    __metadata("design:paramtypes", [toys_service_1.ToysService])
], JatekokController);
//# sourceMappingURL=toys.controller.js.map