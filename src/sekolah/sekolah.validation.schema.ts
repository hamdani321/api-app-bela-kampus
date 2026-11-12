import { z } from 'zod';

export const createSekolahSchema = z.object({
  nama: z
    .string()
    .trim()
    .min(1, 'Nama sekolah wajib diisi')
    .max(150, 'Nama sekolah maksimal 150 karakter'),

  npsn: z
    .string()
    .trim()
    .min(1, 'NPSN wajib diisi')
    .regex(/^\d{8}$/, 'NPSN harus terdiri dari 8 digit angka'),

  email: z
    .string()
    .trim()
    .min(1, 'Email wajib diisi')
    .email('Format email tidak valid')
    .max(100, 'Email maksimal 100 karakter'),

  alamat: z
    .string()
    .trim()
    .min(1, 'Alamat wajib diisi')
    .max(500, 'Alamat maksimal 500 karakter'),

  telepon: z
    .string()
    .trim()
    .min(1, 'Nomor telepon wajib diisi')
    .regex(/^[0-9+\-()\s]{8,20}$/, 'Format nomor telepon tidak valid'),

  latitude: z
    .string()
    .trim()
    .min(1, 'Latitude wajib diisi')
    .refine(
      (value) => /^-?(?:90(?:\.0+)?|[0-8]?\d(?:\.\d+)?)$/.test(value),
      'Latitude harus berada antara -90 sampai 90',
    ),

  longitude: z
    .string()
    .trim()
    .min(1, 'Longitude wajib diisi')
    .refine(
      (value) =>
        /^-?(?:180(?:\.0+)?|1[0-7]\d(?:\.\d+)?|[0-9]?\d(?:\.\d+)?)$/.test(
          value,
        ),
      'Longitude harus berada antara -180 sampai 180',
    ),
});

// Generate TypeScript type secara otomatis
export type CreateSekolahSchema = z.infer<typeof createSekolahSchema>;
