import { Controller, Get, Inject } from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service.js';

@Controller('/api/mahasiswa')
export class MahasiswaController {
  constructor(private mahasiswaService: MahasiswaService) {}

  @Get()
  mahasiswa() {
    return this.mahasiswaService.mahasiswa();
  }
}
