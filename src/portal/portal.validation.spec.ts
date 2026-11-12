import { ZodValidationPipe } from '../common/pipes/validation.pipe.js';
import { REGISTER_PORTAL_SCHEMA } from './portal.validation.js';

describe('validasi harus benar', () => {
  let pipe: ZodValidationPipe;
  beforeEach(() => {
    pipe = new ZodValidationPipe(REGISTER_PORTAL_SCHEMA);
  });
  it('validasi harus benar', async () => {
    const payload = {
      portal_id: 1,
      sekolah_id: 1,
      tipe: 'KELOMPOK',
      registrasi_anggota: [{ nim: '2019139002' }, { nim: '2019139003' }],
    };

    const tes = await pipe.transform(payload);
    console.log(tes);

    expect(tes).toEqual(payload);
  });
});
