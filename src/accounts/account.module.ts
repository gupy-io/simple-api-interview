import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from './account.controller';
import { AccountEntity } from './account.entity';
import { AccountService } from './account.service';

@Module({
  controllers: [AccountController],
  exports: [AccountService],
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  providers: [AccountService],
})
export class AccountModule {}
