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
exports.RecadoEntity = void 0;
const pessoa_entity_1 = require("../../pessoas/entities/pessoa.entity");
const typeorm_1 = require("typeorm");
let RecadoEntity = class RecadoEntity {
};
exports.RecadoEntity = RecadoEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RecadoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], RecadoEntity.prototype, "texto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pessoa_entity_1.Pessoa),
    (0, typeorm_1.JoinColumn)({ name: 'de' }),
    __metadata("design:type", pessoa_entity_1.Pessoa)
], RecadoEntity.prototype, "de", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pessoa_entity_1.Pessoa),
    (0, typeorm_1.JoinColumn)({ name: 'para' }),
    __metadata("design:type", pessoa_entity_1.Pessoa)
], RecadoEntity.prototype, "para", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], RecadoEntity.prototype, "lido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], RecadoEntity.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], RecadoEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], RecadoEntity.prototype, "updateAt", void 0);
exports.RecadoEntity = RecadoEntity = __decorate([
    (0, typeorm_1.Entity)()
], RecadoEntity);
//# sourceMappingURL=recados.entity.js.map