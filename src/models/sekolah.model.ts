export class Sekolah {
  id: number = 0;
  npsn: string = '';
  nama: string = '';
  email: string = '';
  alamat: string = '';
  telepon: string = '';
  latitude: string = '';
  longitude: string = '';
  namaKepsek: string = '';
  createdAt: string = '';
  updatedAt: string = '';
}
export class SekolahResponse {
  message: string = '';
  data?: Sekolah[] | null;
  constructor(message: string, data: any) {
    this.message = message;
    this.data = data;
  }
}

export class SekolahRequest {
  nama: string;

  npsn: string;
  email: string;

  alamat: string;

  telepon: string;

  latitude: string;

  longitude: string;
}
