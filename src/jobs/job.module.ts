import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from 'src/accounts/account.module';
import { JobController } from './job.controller';
import { JobEntity } from './job.entity';
import { JobService } from './job.service';

@Module({
  controllers: [JobController],
  imports: [AccountModule, TypeOrmModule.forFeature([JobEntity])],
  providers: [JobService],
})
export class JobModule {}
