import { Injectable } from '@nestjs/common';
import { ItemEntity } from '../models/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '../models/item.interface';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemRepository: Repository<ItemEntity>,
  ) {}

  create(item: Item): Observable<Item> {
    return from(this.itemRepository.save(item));
  }

  findAll(): Observable<Item[]> {
    return from(this.itemRepository.find());
  }

  findOne(id: number): Observable<Item> {
    return from(this.itemRepository.findOne({ id }));
  }

  updateOne(id: number, item: Item): Observable<any> {
    return from(this.itemRepository.update(id, item));
  }

  deleteOne(id: number): Observable<any> {
    return from(this.itemRepository.delete(id));
  }
}
