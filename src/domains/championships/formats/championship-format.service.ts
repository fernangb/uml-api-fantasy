import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChampionshipFormatDto } from '../dto/create-championship-format.dto';
import { ChampionshipFormat } from './entities/championship-format.entity';

@Injectable()
export class ChampionshipFormatService {
  constructor(
    @InjectRepository(ChampionshipFormat)
    private championshipFormatRepository: Repository<ChampionshipFormat>,
  ) {}

  async create(data: CreateChampionshipFormatDto): Promise<ChampionshipFormat> {
    const {
      name,
      finalPlays,
      groupRounds,
      ownersNumber,
      playoffsPlays,
      teamsNumber,
      type,
      groupsNumber,
      teamsPerGroup,
    } = data;

    const nameExists = await this.findByName(name);

    if (!!nameExists) throw new BadRequestException('Nome já cadastrado');

    const formatExists = await this.validateSameFormat({
      finalPlays,
      groupRounds,
      ownersNumber,
      playoffsPlays,
      teamsNumber,
      type,
      groupsNumber,
      teamsPerGroup,
    });

    if (formatExists) throw new BadRequestException('Formato já cadastrado');

    return this.championshipFormatRepository.save(
      this.championshipFormatRepository.create(data),
    );
  }

  async findAll(): Promise<ChampionshipFormat[]> {
    return this.championshipFormatRepository.find();
  }

  async findAllActives(): Promise<ChampionshipFormat[]> {
    return this.championshipFormatRepository.find({ isActive: true });
  }

  async findByName(name: string): Promise<ChampionshipFormat | undefined> {
    return this.championshipFormatRepository.findOne({ name });
  }

  async validateSameFormat({
    finalPlays,
    groupRounds,
    ownersNumber,
    playoffsPlays,
    teamsNumber,
    type,
  }: Omit<CreateChampionshipFormatDto, 'name'>): Promise<boolean> {
    const formatExists = await this.championshipFormatRepository.findOne({
      finalPlays,
      groupRounds,
      ownersNumber,
      playoffsPlays,
      teamsNumber,
      type,
    });

    if (!formatExists) return false;

    return true;
  }
}
