import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job';
import { JobEntity } from './job.entity';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(JobEntity) private repository: Repository<JobEntity>,
  ) {}

  public async create(newJob: Job): Promise<Job> {
    return new Job(
      await this.repository.save({
        ...newJob,
        applications: Array.isArray(newJob.applications)
          ? newJob.applications.join(',')
          : '',
      }),
    );
  }

  public async findAll(): Promise<Job[]> {
    const jobs = await this.repository.find();
    return jobs.map((job) => new Job(job));
  }

  public async findOneById(id: number): Promise<Job | null> {
    const job = await this.repository.findOne({ id });

    if (job) {
      return new Job(job);
    }

    return null;
  }

  public async update(newJob: Job): Promise<Job> {
    return new Job(
      await this.repository.save({
        ...newJob,
        applications: Array.isArray(newJob.applications)
          ? newJob.applications.join(',')
          : '',
      }),
    );
  }
}
