import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '../common/prisma.client.service.js';
import { SekolahResponse } from '../models/sekolah.model.js';

@Injectable()
export class SekolahService {
  constructor(private prismaClientService: PrismaClientService) {}

  async sekolah() {
    const dataSekolah = await this.prismaClientService.sekolah.findMany();
    return new SekolahResponse('Data sekolah ditemukan', dataSekolah);
  }
}
