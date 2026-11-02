import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '../common/prisma.client.service.js';

@Injectable()
export class PortalService {
  constructor(private prismaClientService: PrismaClientService) {}

  async portal() {}
}
