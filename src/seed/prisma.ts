import 'dotenv/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../generated/prisma/client.js';
import { seedKelas } from './kelas.seed.js';
import { seedMahasiswa } from './mahasiswa.seed.js';
import { seedUsers } from './users.seed.js';
import { seedProdi } from './prodi.seed.js';
import { seedSekolah } from './sekolah.seed.js';
const connectionString = process.env.DATABASE_URL!;

const adapter = new PrismaMariaDb(connectionString);
const prisma = new PrismaClient({ adapter });

export { prisma };

async function main() {
  console.log('Memulai seeding....');

  await seedKelas();
  await seedMahasiswa();
  await seedUsers();
  await seedProdi();
  await seedSekolah();

  console.log('Seeding selesai....');
}

main()
  .then((result) => {
    console.log('Berhasil seeding data!');
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Koneksi database ditutup.');
  });
