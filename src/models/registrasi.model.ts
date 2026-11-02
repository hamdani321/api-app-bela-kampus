import { RegistrasiStatus, RegistrasiTipe } from '../generated/prisma/enums.js';

export class Registrasi {
  id: number;
  portal_id: number;
  sekolah_id: number;
  nim_mahasiswa: number;
  tipe: RegistrasiTipe;
  status: RegistrasiStatus;
  createdAt: string;
  updatedAt: string;
}
