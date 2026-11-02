import { JenisKelamin } from '../generated/prisma/enums.js';

export class Mahasiswa {
  id: number;
  nama: string;
  email: string;
  nim: string;
  kode_prodi: string;
  kelas_id: number;
  jenis_kelamin: JenisKelamin;
  createdAt?: Date | null;
  updatedAt?: Date | null;
}

export class MahasiswaResponse {
  message: string;
  data: Mahasiswa[];
  constructor(message: string, data: Mahasiswa[]) {
    this.message = message;
    this.data = data;
  }
}
