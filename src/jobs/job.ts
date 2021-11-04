import { JobStatusEnum } from './job.enums';

interface JobParams {
  id?: number;
  name: string;
  status?: JobStatusEnum;
  applications?: string;
}

export class Job {
  public id?: number;
  public name: string;
  public status?: JobStatusEnum;
  public applications?: number[] = [];

  constructor({ applications, id, name, status }: JobParams) {
    this.applications = applications
      ?.split(',')
      .filter(Boolean)
      .map((accountId) => parseInt(accountId));
    this.id = id;
    this.name = name;
    this.status = status;
  }

  public publish(): void | Error {
    if (this.status !== JobStatusEnum.DRAFT) {
      throw new Error(
        `To publish job it must be in ${JobStatusEnum.DRAFT} status`,
      );
    }

    this.status = JobStatusEnum.PUBLISHED;
  }

  public apply(accountId: number): void | Error {
    if (this.applications.includes(accountId)) {
      throw new Error(`Already has an application to account ${accountId}`);
    }

    this.applications.push(accountId);
  }
}
