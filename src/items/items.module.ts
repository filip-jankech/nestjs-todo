import { Module } from '@nestjs/common';
import { ItemsController } from './controller/items.controller';
import { ItemsService } from './service/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './models/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
