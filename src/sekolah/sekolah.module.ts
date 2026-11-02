import { Module } from '@nestjs/common';
import { SekolahController } from './sekolah.controller.js';
import { SekolahService } from './sekolah.service.js';

@Module({
  controllers: [SekolahController],
  providers: [SekolahService],
})
export class SekolahModule {}
