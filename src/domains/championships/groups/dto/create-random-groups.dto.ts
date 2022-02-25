import { Owner } from 'src/domains/owners/owner.entity';
import { Team } from 'src/domains/teams/team.entity';

export class CreateRandomChampionshipGroupDto {
  teamsNumber: number;
  teams: Team[];
  owners: Owner[];
  maxTeamsWithSameOwner: number;
  championshipId: string;
  classicatedTeams: number;
  rounds: number;
}
