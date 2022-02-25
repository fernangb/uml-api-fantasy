import { Controller, Get, Post, Body } from '@nestjs/common';
import { ChampionshipService } from './championship.service';
import { DefaultChampionshipService } from './default-championship.service';
import { CreateChampionshipDto } from './dto/create-championship.dto';

@Controller('championships')
export class ChampionshipController {
  constructor(
    private readonly championshipService: ChampionshipService,
    private readonly defaultChampionshipService: DefaultChampionshipService,
  ) {}

  @Post()
  async create(@Body() data: CreateChampionshipDto) {
    return this.championshipService.create(data);
  }

  @Get()
  async findAll() {
    return this.championshipService.findAll();
  }
}
