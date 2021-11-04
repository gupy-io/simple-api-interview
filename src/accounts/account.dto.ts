import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class AccountDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 120)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(8)
  password: string;
}
