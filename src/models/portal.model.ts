import { StatusPortal } from '../generated/prisma/enums.js';

export class Portal {
  id: number;
  waktu_mulai: string;
  waktu_selesai: string;
  status: StatusPortal;
  createdAt: string;
  updatedAt: string;
}
