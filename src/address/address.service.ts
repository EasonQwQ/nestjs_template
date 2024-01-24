import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async create(createAddressDto: CreateAddressDto) {
    const addressEntity: AddressEntity = plainToClass(
      AddressEntity,
      createAddressDto,
    );
    console.log(
      '🚀 ~ file: address.service.ts:21 ~ AddressService ~ create ~ addressEntity:',
      addressEntity,
    );
    const savedAddress = await this.addressRepository.save(addressEntity);
    return savedAddress;
  }

  async findAll() {
    const addresses = await this.addressRepository.find();
    return addresses;
  }

  async findOne(id: number) {
    const address = await this.addressRepository.findOne({
      where: {
        id,
      },
    });
    return address;
  }

  async update(id: number, updateAddressDto: UpdateAddressDto) {
    await this.addressRepository.update(id, updateAddressDto);
    const updatedAddress = await this.addressRepository.findOne({
      where: {
        id,
      },
    });
    return updatedAddress;
  }

  async remove(id: number) {
    const addressToRemove = await this.addressRepository.findOne({
      where: {
        id,
      },
    });
    if (addressToRemove) {
      await this.addressRepository.remove(addressToRemove);
      return { message: `Address with id ${id} removed successfully` };
    }
    throw new Error(`Address with id ${id} not found`);
  }
}
