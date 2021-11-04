import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { JobStatusEnum } from './job.enums';

@Entity('jobs')
export class JobEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 120 })
  name: string;

  @Column({ default: JobStatusEnum.DRAFT, enum: JobStatusEnum })
  status?: JobStatusEnum;

  @Column({ default: '' })
  applications?: string;
}
