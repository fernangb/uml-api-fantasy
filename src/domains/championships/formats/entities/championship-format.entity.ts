import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'championship_formats' })
export class ChampionshipFormat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ name: 'teams' })
  teamsNumber: number;

  @Column({ name: 'owners' })
  ownersNumber: number;

  @Column({ name: 'groups' })
  groupsNumber: number;

  @Column({ name: 'teams_per_group' })
  teamsPerGroup: number;

  @Column({ name: 'max_same_owner_teams_per_group', default: 2 })
  maxSameOwnerTeamsPerGroup: number;

  @Column({ name: 'group_rounds' })
  groupRounds: number;

  @Column({ name: 'playoffs_plays' })
  playoffsPlays: number;

  @Column({ name: 'final_plays' })
  finalPlays: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
