import { Body, Post } from '@nestjs/common';
import { Get, Controller } from '@nestjs/common';
import { CreateOwnerDto } from './dtos/create-owner.dto';
import { OwnerService } from './owner.service';

@Controller('owners')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get()
  async findAll() {
    return this.ownerService.findAll();
  }

  @Post()
  async create(@Body() owner: CreateOwnerDto) {
    return this.ownerService.create(owner);
  }
}
