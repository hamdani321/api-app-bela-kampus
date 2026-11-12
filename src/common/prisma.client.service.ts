import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaClientService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private configService: ConfigService) {
    const adapter = new PrismaMariaDb({
      host: configService.getOrThrow<string>('DB_HOST'),
      port: configService.getOrThrow<number>('DB_PORT'),
      database: configService.getOrThrow<string>('DB_NAME'),
      user: configService.getOrThrow<string>('DB_USERNAME'),
      password: configService.getOrThrow<string>('DB_PASSWORD'),
      connectionLimit: 5,
    });
    super({
      adapter,
    });
  }
  async onModuleInit(): Promise<void> {
    await this.$connect();
    console.log('Database Connected!');
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
    console.log('Database Disconnected!');
  }
}
