import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerModule } from '../owners/owner.module';
import { TeamModule } from '../teams/team.module';
import { ChampionshipController } from './championship.controller';
import { ChampionshipService } from './championship.service';
import { DefaultChampionshipService } from './default-championship.service';
import { Championship } from './entities/championship.entity';
import { ChampionshipFormatModule } from './formats/championship-format.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Championship]),
    ChampionshipFormatModule,
    OwnerModule,
    TeamModule,
  ],
  controllers: [ChampionshipController],
  providers: [ChampionshipService, DefaultChampionshipService],
  exports: [ChampionshipService],
})
export class ChampionshipModule {}
