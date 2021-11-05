import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { Account } from './account';
import { AccountDTO } from './account.dto';
import { AccountService } from './account.service';

@Controller('accounts')
export class AccountController {
  constructor(private service: AccountService) {}

  @Post('create-account')
  public async createAnAccount(
    @Body() body: AccountDTO,
  ): Promise<Account | BadRequestException> {
    const accountExisted = await this.service.findOneByEmail(body.email);

    if (accountExisted) {
      return accountExisted;
    }

    return this.service.create(new Account(body));
  }
}
