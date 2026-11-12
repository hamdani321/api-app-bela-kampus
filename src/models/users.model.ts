import { role_users } from '../generated/prisma/client.js';
import { Mahasiswa } from './mahasiswa.model.js';

export interface UserTokenPayload {
  id: number;
  email: string;
  name: string;
  roles: role_users[];
  mahasiswa: Mahasiswa;
}
