import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChampionshipFormatController } from './championship-fomat.controller';
import { ChampionshipFormatService } from './championship-format.service';
import { ChampionshipFormat } from './entities/championship-format.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChampionshipFormat])],
  controllers: [ChampionshipFormatController],
  providers: [ChampionshipFormatService],
  exports: [ChampionshipFormatService],
})
export class ChampionshipFormatModule {}
