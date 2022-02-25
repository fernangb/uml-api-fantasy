import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OwnerService } from '../owners/owner.service';
import { Team } from '../teams/team.entity';
import { TeamService } from '../teams/team.service';
import { ChampionshipService } from './championship.service';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { Championship } from './entities/championship.entity';
import IChampionshipService from './interfaces/championship.interface';

@Injectable()
export class DefaultChampionshipService implements IChampionshipService {
  constructor(
    @InjectRepository(Championship)
    private championshipRepository: Repository<Championship>,
    @Inject(OwnerService)
    private ownerService: OwnerService,
    @Inject(TeamService)
    private teamService: TeamService,
    @Inject(ChampionshipService)
    private championshipService: ChampionshipService,
  ) {}

  validateNumberOfTeams(teams: Team[]): boolean {
    const maxTeams = 16;

    if (teams.length !== maxTeams) return false;

    return true;
  }

  async create(data: CreateChampionshipDto): Promise<Championship> {
    return this.championshipService.create(data);
  }
}
