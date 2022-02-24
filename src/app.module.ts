import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { OwnerModule } from './domains/owners/owner.module';
import { ConfigModule } from '@nestjs/config';
import { TeamModule } from './domains/teams/team.module';
import { ChampionshipModule } from './domains/championships/championship.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    OwnerModule,
    TeamModule,
    ChampionshipModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
