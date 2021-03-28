import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffes: Coffee[] = [
    {
      id: 1,
      name: 'Dark Roasted',
      brand: 'Tim Hortons',
      flavors: ['classic', 'strong'],
    },
  ];

  findAll() {
    return this.coffes;
  }

  findOne(id: string) {
    return this.coffes.find((item) => item.id === +id);
  }

  create(createCoffeeDto: any) {
    this.coffes.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffe = this.findOne(id);
    if (existingCoffe) {
      // TODO update the existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffes.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffes.splice(coffeeIndex, 1);
    }
  }
}
