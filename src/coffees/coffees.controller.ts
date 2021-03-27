import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('')
  findAll() {
    return `find all method`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this action returns #id: ${id}`;
  }
}
