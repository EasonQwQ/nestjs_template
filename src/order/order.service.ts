import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderEntity } from './entities/order.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
    const orderEntity: OrderEntity =
      this.orderRepository.create(createOrderDto);
    return this.orderRepository.save(orderEntity);
  }

  async findAll(): Promise<OrderEntity[]> {
    return this.orderRepository.find();
  }

  async findOne(id: number): Promise<OrderEntity> {
    const order = await this.orderRepository.findOne({
      where: {
        id,
      },
    });
    if (!order) {
      throw new Error(`Order with id ${id} not found`);
    }
    return order;
  }

  async update(
    id: number,
    updateOrderDto: UpdateOrderDto,
  ): Promise<OrderEntity> {
    await this.orderRepository.update(id, updateOrderDto);
    const updatedOrder = await this.findOne(id);
    return updatedOrder;
  }

  async remove(id: number): Promise<{ message: string }> {
    const orderToRemove = await this.findOne(id);
    await this.orderRepository.remove(orderToRemove);
    return { message: `Order with id ${id} removed successfully` };
  }
}
