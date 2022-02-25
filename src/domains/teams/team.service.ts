import { BadRequestException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { POINTS } from 'src/constants';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dtos/create-team.dto';
import { Team } from './team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async findAll(): Promise<Team[]> {
    return this.teamRepository.find({ order: { name: 'ASC' } });
  }

  async findByOwner(ownerId: string): Promise<Team[]> {
    return this.teamRepository.find({ ownerId });
  }

  async findByName(name: string): Promise<Team | undefined> {
    return this.teamRepository.findOne({ name });
  }

  async create(data: CreateTeamDto) {
    if (await this.hasName(data.name))
      throw new BadRequestException('Time já cadastrado');

    if (await this.hasInitials(data.initials))
      throw new BadRequestException('Iniciais já cadastrada');

    return this.teamRepository.save(this.teamRepository.create(data));
  }

  async hasInitials(initials: string): Promise<boolean> {
    const team = await this.teamRepository.findOne({ initials });

    return !!team;
  }

  async hasName(name: string): Promise<boolean> {
    const team = await this.teamRepository.findOne({ name });

    return !!team;
  }

  async calculatePoints() {
    const teams = await this.teamRepository.find();

    const actualTeams = teams.map(
      (team) =>
        (team.points =
          team.titles * POINTS.TITLE +
          (team.finals - team.titles) * POINTS.FINAL +
          team.semifinals * POINTS.SEMIFINAL +
          team.quarterFinals * POINTS.QUARTER_FINALS +
          team.groupStage * POINTS.GROUP_STAGE +
          team.victories * POINTS.VICTORY +
          team.draws * POINTS.DRAW +
          team.defeats * POINTS.LOSS),
    );

    return actualTeams.sort((a, b) => (a > b ? a : b));
  }

  async getTeams(names: string[]): Promise<Team[]> {
    const teams = [];

    for (const name of names) {
      const teamExists = await this.findByName(name);

      if (!teamExists)
        throw new BadRequestException(`Time ${name} não cadastrado`);

      teams.push(teamExists);
    }

    return teams;
  }
}
