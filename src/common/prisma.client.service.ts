import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaClientService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    const adapter = new PrismaMariaDb({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT ?? 3306),
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      connectionLimit: 5,
    });
    super({
      adapter,
    });
  }
  async onModuleInit(): Promise<void> {
    await this.$connect();
    console.log('Prisma berhasil terhubung ke database');
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
    console.log('Koneksi Prisma ditutup');
  }
}
