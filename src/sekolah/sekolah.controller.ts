import { Controller, Get } from '@nestjs/common';
import { SekolahService } from './sekolah.service.js';

@Controller('/api/sekolah')
export class SekolahController {
  constructor(private sekolahService: SekolahService) {}
  @Get()
  sekolah() {
    return this.sekolahService.sekolah();
  }
}
