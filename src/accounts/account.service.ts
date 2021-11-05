import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './account';
import { AccountEntity } from './account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity)
    private repository: Repository<AccountEntity>,
  ) {}

  public async create(newAccount: Account): Promise<Account> {
    return new Account(await this.repository.save(newAccount));
  }

  public async findOneByEmail(email: string): Promise<Account> {
    const account = await this.repository.findOne({ email });

    if (account) {
      return new Account(account);
    }

    return null;
  }

  public async findOneById(id: number): Promise<Account | null> {
    const account = await this.repository.findOne({ id });

    if (account) {
      return new Account(account);
    }

    return null;
  }
}
