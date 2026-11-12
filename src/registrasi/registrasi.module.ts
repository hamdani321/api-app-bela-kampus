import { Module } from '@nestjs/common';
import { RegistrasiController } from './registrasi.controller.js';
import { RegistrasiService } from './registrasi.service.js';

@Module({
  controllers: [RegistrasiController],
  providers: [RegistrasiService],
})
export class RegistrasiModule {}
