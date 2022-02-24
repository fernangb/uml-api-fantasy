import { Body, Post } from '@nestjs/common';
import { Get, Controller } from '@nestjs/common';
import { CreateTeamDto } from './dtos/create-team.dto';
import { TeamService } from './team.service';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  async findAll() {
    return this.teamService.findAll();
  }

  @Post()
  async create(@Body() team: CreateTeamDto) {
    return this.teamService.create(team);
  }
}
