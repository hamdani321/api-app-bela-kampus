import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '../common/prisma.client.service.js';

@Injectable()
export class UsersService {
  constructor(private prismaClientService: PrismaClientService) {}
  async users() {
    const data = await this.prismaClientService.users.findMany();
    return {
      message: 'Berhasil ambil data user!',
      data: data,
    };
  }
}
