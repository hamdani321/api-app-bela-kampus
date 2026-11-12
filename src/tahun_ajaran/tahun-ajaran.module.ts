import { Module } from '@nestjs/common';
import { TahunAjaranController } from './tahun-ajaran.controller.js';
import { TahunAjaranService } from './tahun-ajaran.service.js';

@Module({
  controllers: [TahunAjaranController],
  providers: [TahunAjaranService],
})
export class TahunAjaranModule {}
