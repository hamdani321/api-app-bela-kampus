import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module.js';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CommonModule,
    MahasiswaModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
