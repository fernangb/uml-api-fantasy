import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { OwnerController } from '../controllers/owner.controller';
import { OwnerService } from '../services/owner.service';
import { ownerProviders } from './owner.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [OwnerController],
  providers: [...ownerProviders, OwnerService],
})
export class OwnerModule {}
