"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeService = void 0;
const common_1 = require("@nestjs/common");
let CoffeeService = class CoffeeService {
    coffees = [
        {
            nome: "Paraíso",
            tipo: "Forte",
            quantidade: 2,
            preco: 25.6,
            id: "22",
            descricao: "Café encorpado com notas intensas de cacau e aroma marcante.",
            tags: ["intenso", "cacau", "tradicional"]
        }
    ];
    getCoffeeById(id) {
        const coffee = this.coffees.find(c => c.id === id);
        if (!coffee)
            throw new common_1.NotFoundException('Café não encontrado');
        return coffee;
    }
    createCoffee(dto) {
        const exists = this.coffees.find(c => c.id === dto.id);
        if (exists)
            throw new common_1.BadRequestException('ID já existe');
        this.coffees.push(dto);
        return {
            message: 'Café criado com sucesso',
            cafe: dto,
        };
    }
};
exports.CoffeeService = CoffeeService;
exports.CoffeeService = CoffeeService = __decorate([
    (0, common_1.Injectable)()
], CoffeeService);
//# sourceMappingURL=coffee.service.js.map