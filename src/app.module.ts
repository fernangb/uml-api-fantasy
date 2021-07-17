import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { OwnerModule } from './domains/owner/modules/owner.module';

@Module({
  imports: [DatabaseModule, OwnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
