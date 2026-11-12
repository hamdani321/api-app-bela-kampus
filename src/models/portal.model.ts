import { StatusPortal } from '../generated/prisma/enums.js';
import { Mahasiswa } from './mahasiswa.model.js';

export class Portal {
  id: number;
  waktu_mulai: string;
  waktu_selesai: string;
  status: StatusPortal;
  createdAt: string;
  updatedAt: string;
}

export interface RegistrasiPortalRequest {
  portal_id: number;
  sekolah_id: number;
  tipe: string;
  registrasi_anggota: { nim: string }[] | null;
  // registrasi_anggota: Mahasiswa[] | null;
}
