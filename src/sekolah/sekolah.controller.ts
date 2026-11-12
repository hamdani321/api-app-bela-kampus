import { Body, Controller, Get, Post } from '@nestjs/common';
import { SekolahService } from './sekolah.service.js';
import { SekolahRequest } from '../models/sekolah.model.js';
import { createSekolahSchema } from './sekolah.validation.schema.js';
import { ZodValidationPipe } from '../common/pipes/validation.pipe.js';
@Controller('/api/sekolah')
export class SekolahController {
  constructor(private sekolahService: SekolahService) {}
  @Get()
  sekolah() {
    return this.sekolahService.sekolah();
  }

  @Post()
  createSekolah(
    @Body(new ZodValidationPipe(createSekolahSchema)) sekolah: SekolahRequest,
  ) {
    return this.sekolahService.createSekolah(sekolah);
  }
}
