import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChampionshipService } from './championship.service';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';

@Controller('championship')
export class ChampionshipController {
  constructor(private readonly championshipService: ChampionshipService) {}
}
