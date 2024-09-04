import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Customer, Prisma } from '@prisma/client';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async customer(customerId : string): Promise <Customer> {
    return this.prisma.customer.findUnique({
        where: { id : parseInt(customerId) },
    });
  }


  async customers(): Promise <Customer[]> {
    return this.prisma.customer.findMany()
  }

  //async createCustomer(data: Prisma.CustomerCreateInput): Promise<Customer> {
  //  return this.prisma.customer.create({
  //      data,
  //  });
  //}
//
  //async updateCustomer(id : number, data : Prisma.CustomerUpdateInput): Promise<Customer> {
  //  return this.prisma.customer.update({
  //      where: { id },
  //      data,
  //  });
  //}

  getHello() {
    return "Hello World!"
  }

  //async deleteCustomer(id : number): Promise<Customer> {
  //  return this.prisma.customer.delete({
  //      where : { id },
  //  });
  //}
}
