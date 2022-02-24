import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Owner } from '../owners/owner.entity';
import { OwnerService } from '../owners/owner.service';
import { Team } from '../teams/team.entity';
import { TeamService } from '../teams/team.service';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { UpdateChampionshipDto } from './dto/update-championship.dto';
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
  ) {}

  validateNumberOfTeams(teams: Team[]): boolean {
    const maxTeams = 16;

    if (teams.length !== maxTeams) return false;

    return true;
  }

  create(createChampionshipDto: CreateChampionshipDto): Promise<Championship> {
    throw new Error('Method not implemented.');
  }
}
