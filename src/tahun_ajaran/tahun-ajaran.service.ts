import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '../common/prisma.client.service.js';

@Injectable()
export class TahunAjaranService {
  constructor(private prismaClientService: PrismaClientService) {}
  async tahunAjaran() {
    const data = await this.prismaClientService.tahun_ajaran.findMany({});
    return {
      message: 'Berhasil ambil data tahun ajaran!',
      data: data,
    };
  }
}
