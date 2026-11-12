import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '../common/prisma.client.service.js';

@Injectable()
export class RegistrasiService {
  constructor(private prismaClientService: PrismaClientService) {}
  async registrasi() {
    const data = await this.prismaClientService.registrasi.findMany({
      include: {
        mahasiswa: true,
        sekolah: true,
        registrasi_anggota: true,
        portal: {
          include: {
            tahun_ajaran: true,
          },
        },
      },
    });
    return {
      message: 'Berhasil mengambil data registrasi!',
      data: data,
    };
  }
}
