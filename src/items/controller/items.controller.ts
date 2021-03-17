import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ItemsService } from '../service/items.service';
import { Item } from '../models/item.interface';
import { Observable } from 'rxjs';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() item: Item): Observable<Item> {
    return this.itemsService.create(item);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<Item> {
    return this.itemsService.findOne(Number(id));
  }

  @Get()
  findAll(): Observable<Item[]> {
    return this.itemsService.findAll();
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() item: Item): Observable<any> {
    return this.itemsService.updateOne(Number(id), item);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): Observable<any> {
    return this.itemsService.deleteOne(Number(id));
  }
}
