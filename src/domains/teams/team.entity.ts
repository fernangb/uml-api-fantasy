import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Owner } from '../owners/owner.entity';

@Entity({ name: 'teams' })
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  initials: string;

  @Column()
  country: string;

  @Column({ default: 0 })
  points: number;

  @Column({ default: 0 })
  totalPlayers: number;

  @Column({ default: 0 })
  participations: number;

  @Column({ default: 0 })
  titles: number;

  @Column({ default: 0 })
  finals: number;

  @Column({ default: 0 })
  semifinals: number;

  @Column({ default: 0 })
  quarterFinals: number;

  @Column({ default: 0 })
  groupStage: number;

  @Column()
  olderTitles: number;

  @Column({ default: 0 })
  matches: number;

  @Column({ default: 0 })
  victories: number;

  @Column({ default: 0 })
  draws: number;

  @Column({ default: 0 })
  defeats: number;

  @Column({ default: 0 })
  goalsScored: number;

  @Column({ default: 0 })
  goalsConceded: number;

  @Column()
  ownerId: string;

  @ManyToOne(() => Owner, (o) => o.name, { eager: true })
  @JoinColumn({ name: 'ownerId' })
  owner: Owner;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
