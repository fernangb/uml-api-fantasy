import { Owner } from 'src/domains/owners/owner.entity';
import { Team } from 'src/domains/teams/team.entity';

export class CreateChampionshipGroupDto {
  name: string;
  rounds: number;
  teamsNumber: number;
  classicatedTeams: number;
  maxTeamsWithSameOwner: number;
  championshipId: string;
  teams: Team[];
  owners: Owner[];
}
