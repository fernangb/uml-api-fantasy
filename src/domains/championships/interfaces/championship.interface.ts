import { Owner } from 'src/domains/owners/owner.entity';
import { Team } from 'src/domains/teams/team.entity';
import { CreateChampionshipDto } from '../dto/create-championship.dto';
import { Championship } from '../entities/championship.entity';

export default interface IChampionshipService {
  create(createChampionshipDto: CreateChampionshipDto): Promise<Championship>;
  // validateNumberOfTeams(teams: Team[]): boolean;
  // validateTeamOwners(
  //   teams: Team[],
  //   owners: Owner[],
  //   teamsNumber: number,
  // ): boolean;
}
