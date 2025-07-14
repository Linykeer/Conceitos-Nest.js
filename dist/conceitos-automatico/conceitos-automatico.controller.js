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
exports.ConceitosAutomaticoController = void 0;
const common_1 = require("@nestjs/common");
const conceitos_automatico_service_1 = require("./conceitos-automatico.service");
let ConceitosAutomaticoController = class ConceitosAutomaticoController {
    constructor(conceitosAutomaticoService) {
        this.conceitosAutomaticoService = conceitosAutomaticoService;
    }
    home() {
        return this.conceitosAutomaticoService.retornoController();
    }
};
exports.ConceitosAutomaticoController = ConceitosAutomaticoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], ConceitosAutomaticoController.prototype, "home", null);
exports.ConceitosAutomaticoController = ConceitosAutomaticoController = __decorate([
    (0, common_1.Controller)("conceitos-automatico"),
    __metadata("design:paramtypes", [conceitos_automatico_service_1.ConceitosAutomaticoService])
], ConceitosAutomaticoController);
//# sourceMappingURL=conceitos-automatico.controller.js.map