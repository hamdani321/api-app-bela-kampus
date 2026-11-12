import { Controller, Get } from '@nestjs/common';
import { RegistrasiService } from './registrasi.service.js';

@Controller('/api/registrasi')
export class RegistrasiController {
  constructor(private readonly registrasiService: RegistrasiService) {}
  @Get()
  registrasi() {
    return this.registrasiService.registrasi();
  }
}
