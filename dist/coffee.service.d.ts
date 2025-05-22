import { CreateCoffeeDto } from './coffee.dto';
export declare class CoffeeService {
    private coffees;
    getCoffeeById(id: string): CreateCoffeeDto;
    createCoffee(dto: CreateCoffeeDto): {
        message: string;
        cafe: CreateCoffeeDto;
    };
}
