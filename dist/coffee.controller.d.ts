import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './coffee.dto';
export declare class CoffeeController {
    private readonly coffeeService;
    constructor(coffeeService: CoffeeService);
    getCoffeeDetails(id: string): CreateCoffeeDto;
    createCoffee(body: CreateCoffeeDto): {
        message: string;
        cafe: CreateCoffeeDto;
    };
}
