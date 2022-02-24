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
export class ChampionshipService {
  constructor(
    @InjectRepository(Championship)
    private championshipRepository: Repository<Championship>,
    @Inject(OwnerService)
    private ownerService: OwnerService,
    @Inject(TeamService)
    private teamService: TeamService,
  ) {}
}
