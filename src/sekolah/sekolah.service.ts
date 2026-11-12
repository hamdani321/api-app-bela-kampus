import { Injectable } from '@nestjs/common';
import { PrismaClientService } from '../common/prisma.client.service.js';
import { SekolahRequest, SekolahResponse } from '../models/sekolah.model.js';
@Injectable()
export class SekolahService {
  constructor(private prismaClientService: PrismaClientService) {}

  async sekolah() {
    const dataSekolah = await this.prismaClientService.sekolah.findMany();
    return new SekolahResponse('Data sekolah ditemukan', dataSekolah);
  }

  async createSekolah(sekolah: SekolahRequest) {
    const sekolahResult = await this.prismaClientService.sekolah.create({
      data: {
        nama: sekolah.nama,
        npsn: sekolah.npsn,
        email: sekolah.email,
        alamat: sekolah.alamat,
        telepon: sekolah.telepon,
        latitude: sekolah.latitude,
        longitude: sekolah.longitude,
      },
    });
    return {
      message: 'Berhasil tambah sekolah!',
      data: sekolahResult,
    };
  }
}
