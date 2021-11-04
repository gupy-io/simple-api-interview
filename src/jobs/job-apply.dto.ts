import { IsNumber, Min } from 'class-validator';

export class JobApplyDTO {
  @IsNumber()
  @Min(1)
  accountId: number;
}
