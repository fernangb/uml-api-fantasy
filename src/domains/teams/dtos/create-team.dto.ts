import { IsNotEmpty } from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  initials: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  olderTitles: number;

  ownerId: string;
}
