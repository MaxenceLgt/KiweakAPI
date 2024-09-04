import { Controller, Get, Param, Post, Body, Put, Delete, NotFoundException, } from '@nestjs/common';
import { CustomerService } from './service/customer.service';

@Controller()
export class AppController {
  constructor(
    private readonly customerService: CustomerService,
  ) {}

  @Get('api/customers')
  async getAllUsers() {
      const customers = await this.customerService.customers();
      return customers.map(({ birth, astroSign, gender, description, clothes, ...user }) => user);
  }

  @Get('api/customers/:id')
  async findCustomerById(@Param('id') customerId: string) {
    const customer = await this.customerService.customer(customerId);
    if (customer) {
      return customer;
    } else {
        throw new NotFoundException({
          detail: "Customer requested doesn't exist",
        });
    }
  }

  @Get('api/customers/:id/image')
  async getCustomerImage(@Param('id') customerId: string) {
    const customer = await this.customerService.customer(customerId);
    if (customer) {
      return customer.email
    } else {
      throw new NotFoundException({
        detail: "Customer requested doesn't exist",
      });
    }
  }

  @Get()
  getHello() {
    return this.customerService.getHello()
  }
}
