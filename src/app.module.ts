import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { OwnerModule } from './domains/owner/owner.module';
import { ConfigModule } from '@nestjs/config';
import { TeamModule } from './domains/team/team.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, OwnerModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
