import { BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerDto } from './dtos/create-owner.dto';
import { Owner } from './owner.entity';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>,
  ) {}

  async findAll(): Promise<Owner[]> {
    return this.ownerRepository.find({ order: { name: 'ASC' } });
  }

  async create(data: CreateOwnerDto) {
    const owner = await this.ownerRepository.findOne({ name: data.name });

    if (owner) throw new BadRequestException('Dono já cadastrado');

    return this.ownerRepository.save(this.ownerRepository.create(data));
  }
}
