import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Owner } from '../entities/owner.entity';

@Injectable()
export class OwnerService {
  constructor(
    @Inject('OWNER_REPOSITORY')
    private ownerRepository: Repository<Owner>,
  ) {}

  async findAll(): Promise<Owner[]> {
    return this.ownerRepository.find();
  }
}
