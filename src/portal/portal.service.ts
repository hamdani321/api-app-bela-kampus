import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClientService } from '../common/prisma.client.service.js';
import { RegistrasiPortalRequest } from '../models/portal.model.js';
import { UserTokenPayload } from '../models/users.model.js';
import { RegistrasiTipe } from '../generated/prisma/enums.js';

@Injectable()
export class PortalService {
  constructor(private prismaClientService: PrismaClientService) {}

  async portal() {
    const portals = await this.prismaClientService.portal.findMany();
    return {
      message: 'Berhasil mengambil data portal!',
      data: portals,
    };
  }
  async register(user: UserTokenPayload, data: RegistrasiPortalRequest) {
    const registrasi = await this.prismaClientService.registrasi.create({
      data: {
        portal_id: data.portal_id,
        sekolah_id: data.sekolah_id,
        nim_mahasiswa: user.mahasiswa.nim,
        tipe:
          data.tipe == 'INDIVIDU'
            ? RegistrasiTipe.INDIVIDU
            : RegistrasiTipe.KELOMPOK,
        status: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    if (data.tipe == 'KELOMPOK') {
      const dataStoreRegisAnggota = data.registrasi_anggota?.map((item) => {
        return {
          registrasi_id: registrasi.id,
          portal_id: data.portal_id,
          nim_mahasiswa: item.nim,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      });
      const registrasiAnggota =
        await this.prismaClientService.registrasi_anggota.createMany({
          data: dataStoreRegisAnggota!,
        });
    }
    return {
      message: 'berhasil registrasi portal!',
      data: registrasi,
    };
  }

  async getDataFormRegistrasi(portalId: string) {
    const portal = await this.prismaClientService.portal.findUnique({
      where: {
        id: Number(portalId),
      },
      include: {
        tahun_ajaran: true,
      },
    });
    const sekolah = await this.prismaClientService.sekolah.findMany({
      orderBy: {
        nama: 'asc',
      },
    });
    const mahasiswa = await this.prismaClientService.mahasiswa.findMany({
      orderBy: {
        nama: 'asc',
      },
    });
    return {
      message: 'Berhasil ambil data portal!',
      data: {
        portal: portal,
        sekolah: sekolah,
        mahasiswa: mahasiswa,
      },
    };
  }

  async getDetailPortal(id: string) {
    const data = await this.prismaClientService.portal.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        tahun_ajaran: true,
        registrasi: {
          include: {
            mahasiswa: true,
            registrasi_anggota: true,
          },
        },
      },
    });
    return {
      message: 'Berhasil ambil data detail portal!',
      data: data,
    };
  }
  async getActivePortal(user: any) {
    const portal = await this.prismaClientService.portal.findFirst({
      where: {
        status: 'AKTIF',
      },
      include: {
        tahun_ajaran: true,
      },
    });
    if (!portal) {
      throw new NotFoundException('Portal tidak ditemukan!');
    }
    const registrasi = await this.prismaClientService.registrasi.findFirst({
      where: {
        nim_mahasiswa: user.mahasiswa.nim,
        portal_id: portal.id,
      },
    });
    const registrasiAnggota =
      await this.prismaClientService.registrasi_anggota.findFirst({
        where: {
          nim_mahasiswa: user.mahasiswa.nim,
          portal_id: portal?.id,
        },
      });
    return {
      message: 'Fetch data portal',
      data: {
        portal: portal,
        registrasi: registrasi,
        registrasi_anggota: registrasiAnggota,
      },
    };
  }
}
