import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5435,
      username: 'postgres',
      password: 'manosleague',
      database: 'uml-fantasy',
      entities: [join(__dirname, 'domains', '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
