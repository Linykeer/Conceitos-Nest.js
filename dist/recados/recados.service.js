"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecadosServce = void 0;
const common_1 = require("@nestjs/common");
let RecadosServce = class RecadosServce {
    constructor() {
        this.lastId = 1;
        this.recados = [
            {
                id: 1,
                texto: 'Este é um recado de teste',
                data: new Date(),
                de: 'joao',
                para: 'ana',
                lido: false,
            }
        ];
    }
    findAll() {
        return this.recados;
    }
    findOne(id) {
        const recado = this.recados.find(item => item.id === id);
        if (recado)
            return recado;
        this.throwNotFoundError();
    }
    create(createRecadoDto) {
        this.lastId++;
        const id = this.lastId;
        const newRecado = {
            id,
            ...createRecadoDto,
            lido: false,
            data: new Date()
        };
        this.recados.push(newRecado);
        return newRecado;
    }
    updatePatch(id, updateRecadoDto) {
        const index = this.recados.findIndex(item => item.id === id);
        if (index < 0) {
            this.throwNotFoundError();
        }
        if (index >= 0) {
            const recadoExistente = this.recados[index];
            this.recados[index] = {
                ...recadoExistente,
                ...updateRecadoDto,
            };
            return this.recados[index];
        }
    }
    remove(id) {
        const index = this.recados.findIndex(item => item.id === id);
        if (index < 0) {
            this.throwNotFoundError();
        }
        const recado = this.recados[index];
        this.recados.splice(index, 1);
        return recado;
    }
    throwNotFoundError() {
        throw new common_1.NotFoundException('Recado não encontrado!');
    }
};
exports.RecadosServce = RecadosServce;
exports.RecadosServce = RecadosServce = __decorate([
    (0, common_1.Injectable)()
], RecadosServce);
//# sourceMappingURL=recados.service.js.map