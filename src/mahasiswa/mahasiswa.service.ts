import { Inject, Injectable } from '@nestjs/common';
import { PrismaClientService } from '../common/prisma.client.service.js';

@Injectable()
export class MahasiswaService {
  constructor(private prismaClient: PrismaClientService) {}
  async mahasiswa() {
    return {
      message: 'Berhasil ambil data',
      data: await this.prismaClient.mahasiswa.findMany({
        include: {
          kelas: true,
          prodi: true,
        },
      }),
    };
  }
}
