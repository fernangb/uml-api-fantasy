import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OwnerService } from '../owners/owner.service';
import { TeamService } from '../teams/team.service';
import { CreateChampionshipDto } from './dto/create-championship.dto';
import { Championship } from './entities/championship.entity';
import { ChampionshipFormatService } from './formats/championship-format.service';

@Injectable()
export class ChampionshipService {
  constructor(
    @InjectRepository(Championship)
    private championshipRepository: Repository<Championship>,
    @Inject(OwnerService)
    private ownerService: OwnerService,
    @Inject(TeamService)
    private teamService: TeamService,
    @Inject(ChampionshipFormatService)
    private championshipFormatService: ChampionshipFormatService,
  ) {}

  async create({
    name,
    format,
    teamsInitials,
  }: CreateChampionshipDto): Promise<Championship> {
    const championship = await this.findByName(name);

    if (!!championship) throw new BadRequestException('Nome inválido');

    const championshipFormat = await this.championshipFormatService.findByName(
      format,
    );

    if (!championshipFormat) throw new BadRequestException('Formato inválido');

    const isValidNumberOfTeams = this.teamService.validateChampionship(
      teamsInitials,
      championshipFormat.teamsNumber,
    );

    if (!isValidNumberOfTeams)
      throw new BadRequestException('Número de times inválido');

    const validTeams = await this.teamService.getTeams(teamsInitials);

    return this.championshipRepository.save(
      this.championshipRepository.create({
        name,
        teams: validTeams,
        formatId: championshipFormat.id,
      }),
    );
  }

  async findByName(name: string): Promise<Championship | undefined> {
    return this.championshipRepository.findOne({ name });
  }

  async findAll(): Promise<Championship[]> {
    return this.championshipRepository.find();
  }
}
