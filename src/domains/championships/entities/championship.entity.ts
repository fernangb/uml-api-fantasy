import { Team } from 'src/domains/teams/team.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ChampionshipFormat } from './championship-format.entity';

@Entity({ name: 'championships' })
export class Championship {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ name: 'format_id' })
  formatId: string;

  @ManyToOne(() => ChampionshipFormat, (o) => o.name, { eager: true })
  @JoinColumn({ name: 'ownerId' })
  format: ChampionshipFormat;

  @ManyToMany(() => Team, { cascade: true, eager: true })
  @JoinTable()
  teams: Team[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
