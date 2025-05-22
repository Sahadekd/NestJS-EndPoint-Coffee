import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './coffee.dto';

@Controller()
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get('/coffes/:id/detalhes')
  getCoffeeDetails(@Param('id') id: string) {
    return this.coffeeService.getCoffeeById(id);
  }

  @Post('/coffee-create')
  createCoffee(@Body() body: CreateCoffeeDto) {
    return this.coffeeService.createCoffee(body);
  }
}
