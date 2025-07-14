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
exports.RecadosServce = void 0;
const common_1 = require("@nestjs/common");
const recados_entity_1 = require("./entities/recados.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let RecadosServce = class RecadosServce {
    constructor(recadoRepository) {
        this.recadoRepository = recadoRepository;
    }
    async findAll() {
        const recados = await this.recadoRepository.find();
        return recados;
    }
    async findOne(id) {
        const recado = await this.recadoRepository.findOne({
            where: {
                id,
            },
        });
        if (recado)
            return recado;
        this.throwNotFoundError();
    }
    async create(createRecadoDto) {
        const newRecado = {
            ...createRecadoDto,
            lido: false,
            data: new Date(),
        };
        const recado = await this.recadoRepository.create(newRecado);
        return this.recadoRepository.save(recado);
    }
    async updatePatch(id, updateRecadoDto) {
        const partialUpdateRecadoDto = {
            lido: updateRecadoDto?.lido,
            texto: updateRecadoDto?.texto,
        };
        const recado = await this.recadoRepository.preload({
            id,
            ...partialUpdateRecadoDto,
        });
        if (!recado) {
            return this.throwNotFoundError();
        }
        await this.recadoRepository.save(recado);
        return recado;
    }
    async remove(id) {
        const recado = await this.recadoRepository.findOneBy({ id });
        if (!recado) {
            return this.throwNotFoundError();
        }
        return this.recadoRepository.remove(recado);
    }
    throwNotFoundError() {
        throw new common_1.NotFoundException("Recado não encontrado!");
    }
};
exports.RecadosServce = RecadosServce;
exports.RecadosServce = RecadosServce = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(recados_entity_1.RecadoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RecadosServce);
//# sourceMappingURL=recados.service.js.map