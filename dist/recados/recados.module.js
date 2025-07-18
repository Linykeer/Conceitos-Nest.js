"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecadosModule = void 0;
const common_1 = require("@nestjs/common");
const recados_controller_1 = require("./recados.controller");
const recados_service_1 = require("./recados.service");
const typeorm_1 = require("@nestjs/typeorm");
const recados_entity_1 = require("./entities/recados.entity");
let RecadosModule = class RecadosModule {
};
exports.RecadosModule = RecadosModule;
exports.RecadosModule = RecadosModule = __decorate([
    (0, common_1.Module)({
        controllers: [recados_controller_1.RecadosController],
        providers: [recados_service_1.RecadosServce],
        imports: [typeorm_1.TypeOrmModule.forFeature([recados_entity_1.RecadoEntity])],
    })
], RecadosModule);
//# sourceMappingURL=recados.module.js.map