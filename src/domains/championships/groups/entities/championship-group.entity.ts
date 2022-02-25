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
import { Championship } from '../../entities/championship.entity';

@Entity({ name: 'championship_groups' })
export class ChampionshipGroup {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  rounds: number;

  @Column({ name: 'teams' })
  teamsNumber: number;

  @Column({ name: 'classificated_teams' })
  classicatedTeams: number;

  @Column({ name: 'championship_id' })
  championshipId: string;

  @ManyToOne(() => Championship, (o) => o.name, { eager: true })
  @JoinColumn({ name: 'championship_id' })
  championship: Championship;

  @ManyToMany(() => Team, { cascade: true, eager: true })
  @JoinTable()
  teams: Team[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
