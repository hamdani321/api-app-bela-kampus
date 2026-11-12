import { Controller, Get, UseGuards } from '@nestjs/common';
import { TahunAjaranService } from './tahun-ajaran.service.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';

@Controller('/api/tahun-ajaran')
export class TahunAjaranController {
  constructor(private tahunAjaranService: TahunAjaranService) {}
  //   @UseGuards(JwtAuthGuard)
  @Get()
  tahunAjaran() {
    return this.tahunAjaranService.tahunAjaran();
  }
}
