import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CustomerService } from './service/customer.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, CustomerService],
})
export class AppModule {}
