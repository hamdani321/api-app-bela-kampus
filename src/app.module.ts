import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module.js';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module.js';
import { ConfigModule } from '@nestjs/config';
import { SekolahModule } from './sekolah/sekolah.module.js';
import { PortalModule } from './portal/portal.module.js';
import { RegistrasiModule } from './registrasi/registrasi.module.js';

@Module({
  imports: [
    CommonModule,
    MahasiswaModule,
    SekolahModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PortalModule,
    RegistrasiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
