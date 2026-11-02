import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '../common/prisma.client.service.js';
import { MahasiswaResponse } from '../models/mahasiswa.model.js';

@Injectable()
export class MahasiswaService {
  constructor(private prismaClientService: PrismaClientService) {}
  async mahasiswa() {
    const mahasiswa = await this.prismaClientService.mahasiswa.findMany({
      include: {
        kelas: true,
        prodi: true,
      },
    });
    return new MahasiswaResponse('Berhasil ambil data mahasiswa', mahasiswa);
  }
}
