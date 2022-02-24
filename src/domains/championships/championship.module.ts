import { Module } from '@nestjs/common';
import { ChampionshipService } from './championship.service';
import { ChampionshipController } from './championship.controller';

@Module({
  controllers: [ChampionshipController],
  providers: [ChampionshipService],
})
export class ChampionshipModule {}
