import { Body, Controller, Post } from '@nestjs/common';
import { ChampionshipFormatService } from './championship-format.service';
import { CreateChampionshipFormatDto } from './dto/create-championship-format.dto';

@Controller('championships/formats')
export class ChampionshipFormatController {
  constructor(
    private readonly championshipService: ChampionshipFormatService,
  ) {}

  @Post()
  async create(@Body() data: CreateChampionshipFormatDto) {
    return this.championshipService.create(data);
  }
}
