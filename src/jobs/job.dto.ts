import { IsString, Length } from 'class-validator';

export class JobDTO {
  @IsString()
  @Length(5)
  name: string;
}
