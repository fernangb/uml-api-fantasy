import { Connection } from 'typeorm';
import { Owner } from '../entities/owner.entity';

export const ownerProviders = [
  {
    provide: 'OWNER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Owner),
    inject: ['DATABASE_CONNECTION'],
  },
];
