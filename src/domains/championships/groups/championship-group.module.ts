import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChampionshipGroupService } from './championship-group.service';
import { ChampionshipGroup } from './entities/championship-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChampionshipGroup])],
  controllers: [],
  providers: [ChampionshipGroupService],
  exports: [ChampionshipGroupService],
})
export class ChampionshipGroupModule {}
