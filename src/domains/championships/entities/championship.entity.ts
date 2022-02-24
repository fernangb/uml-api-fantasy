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

@Entity({ name: 'championships' })
export class Championship {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 'default' })
  type: string;

  @ManyToMany(() => Team, { cascade: true, eager: true })
  @JoinTable()
  teams: Team[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
