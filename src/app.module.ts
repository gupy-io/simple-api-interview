import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './accounts/account.module';
import { JobModule } from './jobs/job.module';

@Module({
  imports: [
    AccountModule,
    JobModule,
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
