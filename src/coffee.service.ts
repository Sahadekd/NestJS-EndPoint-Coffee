import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateCoffeeDto } from './coffee.dto';

@Injectable()
export class CoffeeService {
  private coffees: CreateCoffeeDto[] = [
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

  getCoffeeById(id: string): CreateCoffeeDto {
    const coffee = this.coffees.find(c => c.id === id);
    if (!coffee) throw new NotFoundException('Café não encontrado');
    return coffee;
  }

  createCoffee(dto: CreateCoffeeDto) {
    const exists = this.coffees.find(c => c.id === dto.id);
    if (exists) throw new BadRequestException('ID já existe');
    this.coffees.push(dto);
    return {
      message: 'Café criado com sucesso',
      cafe: dto,
    };
  }
}
