import { z } from 'zod';

export const REGISTER_PORTAL_SCHEMA = z
  .object({
    portal_id: z.number().int().positive('Portal wajib dipilih'),

    sekolah_id: z.number().int().positive('Sekolah wajib dipilih'),

    tipe: z.enum(['INDIVIDU', 'KELOMPOK'], {
      error: 'Tipe registrasi tidak valid',
    }),

    registrasi_anggota: z
      .array(
        z.object({
          nim: z.string().min(1, 'NIM anggota wajib diisi'),
        }),
      )
      .default([]),
  })
  .superRefine((data, ctx) => {
    if (data.tipe === 'KELOMPOK' && data.registrasi_anggota.length < 1) {
      ctx.addIssue({
        code: 'custom',
        path: ['registrasi_anggota'],
        message: 'Minimal harus ada 1 anggota kelompok',
      });
    }
  });

export type RegisterPortalType = z.infer<typeof REGISTER_PORTAL_SCHEMA>;
