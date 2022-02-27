import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { fakeTeam, fakeTeamsGroup } from './mocks/teams.mocks';
import { Team } from './team.entity';
import { TeamService } from './team.service';

describe('TeamService', () => {
  let service: TeamService;
  let repository: Repository<Team>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TeamService,
        {
          provide: getRepositoryToken(Team),
          useFactory: () =>
            jest.fn(() => ({
              find: jest.fn((entity) => entity),
              findOne: jest.fn((entity) => entity),
              create: jest.fn((entity) => entity),
              save: jest.fn((entity) => entity),
            })),
        },
      ],
    }).compile();

    service = module.get<TeamService>(TeamService);
    repository = module.get<Repository<Team>>(getRepositoryToken(Team));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateChampionship', () => {
    it('should be able to return false if teams number is different than max size', () => {
      const teams = [] as string[];
      const maxSize = 4;

      expect(service.validateChampionship(teams, maxSize)).toBe(false);
    });

    it('should be able to return true if teams number is equal than max size', () => {
      const teams = ['Team1', 'Team2', 'Team3', 'Team4'] as string[];
      const maxSize = 4;

      expect(service.validateChampionship(teams, maxSize)).toBe(true);
    });
  });

  describe('validateChampionshipGroup', () => {
    it('should be able to return false if teams number is different than max size', () => {
      const teams = [] as Team[];
      const maxSize = 4;

      expect(service.validateChampionshipGroup(teams, maxSize)).toBe(false);
    });

    it('should be able to return true if teams number is equal than max size', () => {
      const teams = fakeTeamsGroup as Team[];
      const maxSize = 4;

      expect(service.validateChampionshipGroup(fakeTeamsGroup, maxSize)).toBe(
        true,
      );
    });
  });

  describe('getRandomTeam', () => {
    it('should be able to find a random team', () => {
      const teams = fakeTeamsGroup;
      const response = fakeTeam;

      expect(service.getRandomTeam(teams)).toStrictEqual(response);
    });
  });
});
