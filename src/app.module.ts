import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module.js';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module.js';
import { ConfigModule } from '@nestjs/config';
import { SekolahModule } from './sekolah/sekolah.module.js';
import { PortalModule } from './portal/portal.module.js';
import { RegistrasiModule } from './registrasi/registrasi.module.js';
import { AuthModule } from './auth/auth.module.js';
import { TahunAjaranModule } from './tahun_ajaran/tahun-ajaran.module.js';
import { UsersModule } from './users/users.module.js';

@Module({
  imports: [
    CommonModule,
    MahasiswaModule,
    SekolahModule,
    PortalModule,
    RegistrasiModule,
    TahunAjaranModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
