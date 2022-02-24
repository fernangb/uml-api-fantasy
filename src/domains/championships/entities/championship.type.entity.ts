import { Owner } from 'src/domains/owners/owner.entity';
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

@Entity({ name: 'championship_types' })
export class ChampionshipType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 'default' })
  name: string;

  @Column({ default: 16 })
  teamsNumber: number;

  @Column({ default: 3 })
  ownersNumber: number;

  @Column({ default: 4 })
  groupsNumber: number;

  @Column({ default: 4 })
  teamsPerGroup: number;

  @Column({ default: 2 })
  maxSameOwnerTeamsPerGroup: number;

  @Column({ default: 3 })
  groupRounds: number;

  @Column({ default: 1 })
  playoffsPlays: number;

  @Column({ default: 1 })
  finalPlays: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
