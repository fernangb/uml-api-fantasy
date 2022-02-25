export class CreateChampionshipDto {
  teams: string[];
  type: string;
  teamsNumber?: number;
  ownersNumber?: number;
  groupRounds?: number;
  playoffsPlays?: number;
  finalPlays?: number;
}
