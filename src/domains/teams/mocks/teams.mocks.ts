import { Team } from '../team.entity';

export const fakeTeam = {
  id: '1',
  name: 'Team 1',
  initials: 'Tea',
  country: 'BRA',
  points: 0,
  totalPlayers: 0,
  participations: 0,
  titles: 0,
  finals: 0,
  semifinals: 0,
  quarterFinals: 0,
  groupStage: 0,
  olderTitles: 0,
  matches: 0,
  victories: 0,
  draws: 0,
  defeats: 0,
  goalsScored: 0,
  goalsConceded: 0,
  ownerId: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
} as Team;

export const fakeTeamsGroup = [fakeTeam, fakeTeam, fakeTeam, fakeTeam];
