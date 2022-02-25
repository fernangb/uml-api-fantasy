import { Owner } from 'src/domains/owners/owner.entity';
import { Team } from 'src/domains/teams/team.entity';

export class ValidateChampionshipGroupDto {
  teamsNumber: number;
  teams: Team[];
  maxTeamsWithSameOwner: number;
  owners: Owner[];
}
