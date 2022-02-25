import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnerService } from 'src/domains/owners/owner.service';
import { Team } from 'src/domains/teams/team.entity';
import { TeamService } from 'src/domains/teams/team.service';
import { Repository } from 'typeorm';
import { CreateChampionshipGroupDto } from './dto/create-championship-group.dto';
import { CreateRandomChampionshipGroupDto } from './dto/create-random-groups.dto';
import { ValidateChampionshipGroupDto } from './dto/validate-group.dto';
import { ChampionshipGroup } from './entities/championship-group.entity';

@Injectable()
export class ChampionshipGroupService {
  constructor(
    @InjectRepository(ChampionshipGroup)
    private championshipGroupRepository: Repository<ChampionshipGroup>,
    @Inject(TeamService)
    private teamService: TeamService,
    @Inject(OwnerService)
    private ownerService: OwnerService,
  ) {}

  async create({
    championshipId,
    classicatedTeams,
    name,
    rounds,
    teams,
    teamsNumber,
    owners,
  }: CreateChampionshipGroupDto): Promise<ChampionshipGroup> {
    const isTeamsNumberValid = this.teamService.validateChampionshipGroup(
      teams,
      teamsNumber,
    );

    if (!isTeamsNumberValid)
      throw new BadRequestException('Número de times do grupo inválido');

    return this.championshipGroupRepository.save(
      this.championshipGroupRepository.create({
        name,
        rounds,
        teamsNumber,
        classicatedTeams,
        championshipId,
        teams,
      }),
    );
  }

  createRandomGroups({
    teams,
    teamsNumber,
    championshipId,
    classicatedTeams,
    rounds,
  }: CreateRandomChampionshipGroupDto): Team[][] {
    return [[]] as Team[][];
  }

  createRandomGroup(
    {
      teams,
      teamsNumber,
      owners,
      maxTeamsWithSameOwner,
    }: CreateRandomChampionshipGroupDto,
    groupName: string,
  ): Team[] {
    const selectedTeams: Team[] = [];
    const possibleTeams = teams;

    while (selectedTeams.length < teamsNumber) {
      let isValidTeam = false;
      let selectedTeam: Team = null;

      while (!isValidTeam) {
        selectedTeam = this.teamService.getRandomTeam(possibleTeams);

        isValidTeam = this.validate({
          teams: selectedTeams,
          teamsNumber,
          maxTeamsWithSameOwner,
          owners,
        });
      }

      selectedTeams.push(selectedTeam);
      possibleTeams.filter(
        (possibleTeam) => possibleTeam.name !== selectedTeam.name,
      );
    }

    return selectedTeams;
  }

  validate({
    teams,
    teamsNumber,
    maxTeamsWithSameOwner,
    owners,
  }: ValidateChampionshipGroupDto): boolean {
    if (teams.length === 0) return true;

    if (teams.length > teamsNumber) return false;

    const ownerTeams = owners.map((owner) => {
      const ownerTeam = teams.filter((team) => team.ownerId === owner.id);

      return { owner: owner.name, teams: ownerTeam.length };
    });

    const ownerTeamsNumber = ownerTeams.map((ownerTeam) => ownerTeam.teams);

    const existsMaxNumberOfOwnerTeams = ownerTeamsNumber.includes(
      maxTeamsWithSameOwner,
    );

    if (!existsMaxNumberOfOwnerTeams) return true;

    return false;
  }
}
