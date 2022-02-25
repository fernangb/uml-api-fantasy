import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChampionshipFormatService } from './championship-format.service';
import { CreateChampionshipFormatDto } from '../dto/create-championship-format.dto';

@Controller('championships/formats')
export class ChampionshipFormatController {
  constructor(
    private readonly championshipFormatService: ChampionshipFormatService,
  ) {}

  @Post()
  async create(@Body() data: CreateChampionshipFormatDto) {
    return this.championshipFormatService.create(data);
  }

  @Get()
  async findAll() {
    return this.championshipFormatService.findAll();
  }
}
