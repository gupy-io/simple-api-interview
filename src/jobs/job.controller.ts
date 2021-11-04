import {
  BadRequestException,
  Body,
  Get,
  NotFoundException,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { Controller, HttpCode, Param, Post } from '@nestjs/common';
import { Account } from 'src/accounts/account';
import { AccountService } from 'src/accounts/account.service';
import { Job } from './job';
import { JobApplyDTO } from './job-apply.dto';
import { JobDTO } from './job.dto';
import { JobService } from './job.service';

@Controller('jobs')
export class JobController {
  constructor(
    private service: JobService,
    private accountService: AccountService,
  ) {}

  @Post('apply/:jobId')
  @HttpCode(200)
  public async apply(
    @Param('jobId', ParseIntPipe) jobId: number,
    @Body() body: JobApplyDTO,
  ): Promise<Job | NotFoundException | BadRequestException> {
    const job = await this.service.findOneById(jobId);
    if (!job) {
      throw new NotFoundException(null, `Job with id ${jobId} not exists`);
    }

    const account = await this.accountService.findOneById(body.accountId);
    if (!account) {
      throw new NotFoundException(
        null,
        `Account with id ${account} not exists`,
      );
    }

    try {
      job.apply(body.accountId);
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(null, error.message);
      }
    }

    return this.service.update(job);
  }

  @Post('create-job')
  public createAJob(@Body() body: JobDTO): Promise<Job> {
    return this.service.create(new Job(body));
  }

  @Get('list-all-jobs')
  public async listAllJobs(): Promise<Job[]> {
    return await this.service.findAll();
  }

  @Patch('publish-job/:jobId')
  public async publishAJob(
    @Param('jobId', ParseIntPipe) jobId: number,
  ): Promise<Job | NotFoundException | BadRequestException> {
    const job = await this.service.findOneById(jobId);

    if (!job) {
      throw new NotFoundException(null, `Job with id ${jobId} not exists`);
    }

    try {
      job.publish();
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(null, error.message);
      }
    }

    return this.service.update(job);
  }

  @Get('view-applications/:jobId')
  public async viewApplicationsByJob(
    @Param('jobId', ParseIntPipe) jobId: number,
  ): Promise<Account[]> {
    const job = await this.service.findOneById(jobId);

    if (!job) {
      throw new NotFoundException(null, `Job with id ${jobId} not exists`);
    }

    return Promise.all(
      job.applications.map((accountId) =>
        this.accountService.findOneById(accountId),
      ),
    );
  }
}
