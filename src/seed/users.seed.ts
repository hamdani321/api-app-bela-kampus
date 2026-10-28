import 'dotenv/config';
import * as bcrypt from 'bcrypt';
import { prisma } from './prisma.js';
export async function seedUsers() {
  const users = [
    { email: 'admin@poltek-kampar.ac.id', name: 'admin' },
    {
      email: '23215001.tpks@students.poltek-kampar.ac.id',
      name: 'Agung Aji Restu Pamungkas',
    },
    {
      email: '23215002.tpks@students.poltek-kampar.ac.id',
      name: 'Agus Riawan',
    },
    {
      email: '23215003.tpks@students.poltek-kampar.ac.id',
      name: 'Ahmad Riadi',
    },
    {
      email: '23215004.tpks@students.poltek-kampar.ac.id',
      name: 'Alfiano Raihan Ardiansyah',
    },
    {
      email: '23215005.tpks@students.poltek-kampar.ac.id',
      name: 'Ananda Putri Aryani',
    },
    {
      email: '23215006.tpks@students.poltek-kampar.ac.id',
      name: 'Andi Asmarah',
    },
    {
      email: '23215007.tpks@students.poltek-kampar.ac.id',
      name: 'Andri Adi Kusumah',
    },
    {
      email: '23215008.tpks@students.poltek-kampar.ac.id',
      name: 'Aulia Ramadina',
    },
    {
      email: '23215009.tpks@students.poltek-kampar.ac.id',
      name: 'Dicky Wijaya Purba',
    },
    {
      email: '23215010.tpks@students.poltek-kampar.ac.id',
      name: 'Dwi Rahma Sari',
    },
    { email: '23215011.tpks@students.poltek-kampar.ac.id', name: 'Erwin' },
    {
      email: '23215012.tpks@students.poltek-kampar.ac.id',
      name: 'Fransiskus Hanjaya',
    },
    {
      email: '23215013.tpks@students.poltek-kampar.ac.id',
      name: 'Iqbal Debriansyah',
    },
    {
      email: '23215014.tpks@students.poltek-kampar.ac.id',
      name: 'Ismed Abdullah Rambe',
    },
    {
      email: '23215015.tpks@students.poltek-kampar.ac.id',
      name: 'Japuhunan Siregar',
    },
    {
      email: '23215016.tpks@students.poltek-kampar.ac.id',
      name: 'Jorgi Pratama',
    },
    {
      email: '23215017.tpks@students.poltek-kampar.ac.id',
      name: 'M. Fachri Pindo',
    },
    {
      email: '23215018.tpks@students.poltek-kampar.ac.id',
      name: 'M. Sahrizal',
    },
    {
      email: '23215019.tpks@students.poltek-kampar.ac.id',
      name: 'Muhammad Iqbal Saragih',
    },
    {
      email: '23215020.tpks@students.poltek-kampar.ac.id',
      name: 'Muhammad Rafif Hanan',
    },
    {
      email: '23215021.tpks@students.poltek-kampar.ac.id',
      name: 'Putri Ananda',
    },
    {
      email: '23215022.tpks@students.poltek-kampar.ac.id',
      name: 'Rafi Aris Syahidin',
    },
    {
      email: '23215023.tpks@students.poltek-kampar.ac.id',
      name: 'Ratri Maulida',
    },
    {
      email: '23215024.tpks@students.poltek-kampar.ac.id',
      name: 'Sandi Aulia',
    },
    {
      email: '23215025.tpks@students.poltek-kampar.ac.id',
      name: 'Sari Maimunah Nasution',
    },
    {
      email: '23215026.tpks@students.poltek-kampar.ac.id',
      name: 'Taufik Hidayat Purba',
    },
    {
      email: '23215027.tpks@students.poltek-kampar.ac.id',
      name: 'Vicky Maharani',
    },
    {
      email: '23215028.tpks@students.poltek-kampar.ac.id',
      name: 'Windiyani Halizah',
    },
    {
      email: '23311001.tps@students.poltek-kampar.ac.id',
      name: 'Najib Ahmed Muzakky',
    },
    {
      email: '23311002.tps@students.poltek-kampar.ac.id',
      name: 'Radia Ifaldi',
    },
    {
      email: '23311003.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Aidil Adha',
    },
    { email: '23311004.tps@students.poltek-kampar.ac.id', name: 'Sunawawi' },
    {
      email: '23311005.tps@students.poltek-kampar.ac.id',
      name: 'M. Devriansyah',
    },
    {
      email: '23311006.tps@students.poltek-kampar.ac.id',
      name: 'Haekal Akram',
    },
    {
      email: '23311007.tps@students.poltek-kampar.ac.id',
      name: 'Jimmy Tampubolon',
    },
    {
      email: '23311008.tps@students.poltek-kampar.ac.id',
      name: 'Andre Kusuma',
    },
    {
      email: '23311009.tps@students.poltek-kampar.ac.id',
      name: 'Anisa Soleha',
    },
    {
      email: '23311010.tps@students.poltek-kampar.ac.id',
      name: 'Bimo Adi Suryanto',
    },
    {
      email: '23311011.tps@students.poltek-kampar.ac.id',
      name: 'Cecep Nurul Ahmad',
    },
    {
      email: '23311012.tps@students.poltek-kampar.ac.id',
      name: 'Faris Arkan Arsyadani',
    },
    { email: '23311013.tps@students.poltek-kampar.ac.id', name: 'Febi Aditia' },
    {
      email: '23311014.tps@students.poltek-kampar.ac.id',
      name: 'Firman Hidayat',
    },
    {
      email: '23311015.tps@students.poltek-kampar.ac.id',
      name: 'Fuad Khalik Abdullah',
    },
    {
      email: '23311016.tps@students.poltek-kampar.ac.id',
      name: 'Ghanu Ikhsan Tri Delsandes',
    },
    { email: '23311017.tps@students.poltek-kampar.ac.id', name: 'Hafis' },
    {
      email: '23311018.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Fajri',
    },
    {
      email: '23311019.tps@students.poltek-kampar.ac.id',
      name: 'Wahyu Nurfajar',
    },
    {
      email: '23311020.tps@students.poltek-kampar.ac.id',
      name: 'Welni Julita Sari',
    },
    {
      email: '23311021.tps@students.poltek-kampar.ac.id',
      name: 'Aditya Adriansyah',
    },
    {
      email: '23311022.tps@students.poltek-kampar.ac.id',
      name: 'Alfaq Islam Riau Papua Wardana',
    },
    {
      email: '23311023.tps@students.poltek-kampar.ac.id',
      name: 'Alfildzah Ikbaar',
    },
    {
      email: '23311024.tps@students.poltek-kampar.ac.id',
      name: 'Alfinnando Nasution',
    },
    {
      email: '23311025.tps@students.poltek-kampar.ac.id',
      name: 'Anggi Lare Kesuma',
    },
    {
      email: '23311026.tps@students.poltek-kampar.ac.id',
      name: 'Aprizal Sati Yadi',
    },
    { email: '23311027.tps@students.poltek-kampar.ac.id', name: 'Ari Andreas' },
    {
      email: '23311028.tps@students.poltek-kampar.ac.id',
      name: 'Asni Seriyanti Harahap',
    },
    {
      email: '23311029.tps@students.poltek-kampar.ac.id',
      name: 'Bambang Yohanes',
    },
    {
      email: '23311030.tps@students.poltek-kampar.ac.id',
      name: 'Bayu Adirizki',
    },
    {
      email: '23311031.tps@students.poltek-kampar.ac.id',
      name: 'Bayu Alfarezi',
    },
    {
      email: '23311032.tps@students.poltek-kampar.ac.id',
      name: 'Cahya Akbar Winata Sirait',
    },
    {
      email: '23311033.tps@students.poltek-kampar.ac.id',
      name: 'Citra Noviyanti Butar-Butar',
    },
    { email: '23311034.tps@students.poltek-kampar.ac.id', name: 'Danu Armadi' },
    { email: '23311035.tps@students.poltek-kampar.ac.id', name: 'Dina Triana' },
    {
      email: '23311036.tps@students.poltek-kampar.ac.id',
      name: 'Edi Syaputra Sinaga',
    },
    {
      email: '23311037.tps@students.poltek-kampar.ac.id',
      name: 'Egi Agus Prianto',
    },
    { email: '23311038.tps@students.poltek-kampar.ac.id', name: 'Eka Susanto' },
    {
      email: '23311039.tps@students.poltek-kampar.ac.id',
      name: 'Engga Dhani Utomo',
    },
    {
      email: '23311040.tps@students.poltek-kampar.ac.id',
      name: 'Fandi Ashary Hasibuan',
    },
    {
      email: '23311041.tps@students.poltek-kampar.ac.id',
      name: 'Firza Elina Putri',
    },
    {
      email: '23311042.tps@students.poltek-kampar.ac.id',
      name: 'Fitria Ningsih',
    },
    {
      email: '23311043.tps@students.poltek-kampar.ac.id',
      name: 'Fransisca Juliana Br.Sibuea',
    },
    {
      email: '23311044.tps@students.poltek-kampar.ac.id',
      name: 'Gally Raus Hilmansyah',
    },
    {
      email: '23311045.tps@students.poltek-kampar.ac.id',
      name: 'Geovani Andrian Danil',
    },
    {
      email: '23311046.tps@students.poltek-kampar.ac.id',
      name: 'Ghery Raihan Maitataruna',
    },
    {
      email: '23311047.tps@students.poltek-kampar.ac.id',
      name: 'Ilham Fathoni',
    },
    {
      email: '23311048.tps@students.poltek-kampar.ac.id',
      name: 'Ilham Nuzulliandika',
    },
    {
      email: '23311049.tps@students.poltek-kampar.ac.id',
      name: 'Jodi Avrianto Manurung',
    },
    {
      email: '23311050.tps@students.poltek-kampar.ac.id',
      name: 'Khairul Kamal',
    },
    {
      email: '23311051.tps@students.poltek-kampar.ac.id',
      name: 'Maria Goreti Sitompul',
    },
    {
      email: '23311052.tps@students.poltek-kampar.ac.id',
      name: 'Miftahul Huda',
    },
    {
      email: '23311053.tps@students.poltek-kampar.ac.id',
      name: 'Miftahul Jannah',
    },
    {
      email: '23311054.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Fathur Rahman',
    },
    {
      email: '23311055.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Rivaldo Al Khahfi',
    },
    { email: '23311056.tps@students.poltek-kampar.ac.id', name: 'Mutiah' },
    {
      email: '23311057.tps@students.poltek-kampar.ac.id',
      name: 'Nazuwa Narummy',
    },
    {
      email: '23311058.tps@students.poltek-kampar.ac.id',
      name: 'Novintri Purba',
    },
    {
      email: '23311059.tps@students.poltek-kampar.ac.id',
      name: 'Nurhabibah Adha',
    },
    {
      email: '23311060.tps@students.poltek-kampar.ac.id',
      name: 'Nur Saidah Putri Dlm',
    },
    {
      email: '23311061.tps@students.poltek-kampar.ac.id',
      name: 'Nurshofiyah Hayati',
    },
    {
      email: '23311062.tps@students.poltek-kampar.ac.id',
      name: 'Nurul Ain Diana Putri',
    },
    {
      email: '23311063.tps@students.poltek-kampar.ac.id',
      name: 'Nurul Pijriah',
    },
    {
      email: '23311064.tps@students.poltek-kampar.ac.id',
      name: 'Petrus Lumbantoruan',
    },
    {
      email: '23311065.tps@students.poltek-kampar.ac.id',
      name: 'Rendy Kurniawan',
    },
    {
      email: '23311066.tps@students.poltek-kampar.ac.id',
      name: 'Roni Pratama Sianturi',
    },
    {
      email: '23311067.tps@students.poltek-kampar.ac.id',
      name: 'Rosanul Puadi Rambe',
    },
    {
      email: '23311068.tps@students.poltek-kampar.ac.id',
      name: 'Saharani Uli Rizkina Harahap',
    },
    {
      email: '23311069.tps@students.poltek-kampar.ac.id',
      name: 'Siti Hajar Rahyu',
    },
    {
      email: '23311070.tps@students.poltek-kampar.ac.id',
      name: 'Siti Naharin',
    },
    {
      email: '23311071.tps@students.poltek-kampar.ac.id',
      name: 'Suci Ramadani',
    },
    {
      email: '23311072.tps@students.poltek-kampar.ac.id',
      name: 'Syah Furqon Nasution',
    },
    {
      email: '23311073.tps@students.poltek-kampar.ac.id',
      name: 'Taufiqurrahman',
    },
    {
      email: '23311074.tps@students.poltek-kampar.ac.id',
      name: 'Tengku Afrilla Zurima Haya',
    },
    { email: '23311075.tps@students.poltek-kampar.ac.id', name: 'Trinofaldi' },
    {
      email: '23311076.tps@students.poltek-kampar.ac.id',
      name: 'Violi Zahara',
    },
    {
      email: '23311077.tps@students.poltek-kampar.ac.id',
      name: 'Wahyu Dwi Cahyo',
    },
    {
      email: '23311078.tps@students.poltek-kampar.ac.id',
      name: 'Yola Frestiani',
    },
    {
      email: '23311079.tps@students.poltek-kampar.ac.id',
      name: 'Yuni Lestari Br Sinaga',
    },
    { email: '23311080.tps@students.poltek-kampar.ac.id', name: 'Zulfahmi' },
    {
      email: '23311082.tps@students.poltek-kampar.ac.id',
      name: 'Ahmad Rijal Rahman',
    },
    {
      email: '23312001.ppm@students.poltek-kampar.ac.id',
      name: 'M. Egy Al Asyari Isnaini Amanah',
    },
    {
      email: '23312002.ppm@students.poltek-kampar.ac.id',
      name: 'Noufal Farras',
    },
    {
      email: '23312003.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Al Hafiz',
    },
    {
      email: '23312004.ppm@students.poltek-kampar.ac.id',
      name: 'Faryan Hadi Syahputra',
    },
    {
      email: '23312005.ppm@students.poltek-kampar.ac.id',
      name: 'Marga Setyasesa Maulidyana',
    },
    {
      email: '23312006.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Muhajir Adittia',
    },
    {
      email: '23312007.ppm@students.poltek-kampar.ac.id',
      name: 'Muhklis Al Gifahri',
    },
    {
      email: '23312008.ppm@students.poltek-kampar.ac.id',
      name: 'Nando Indra Febio ',
    },
    {
      email: '23312009.ppm@students.poltek-kampar.ac.id',
      name: 'Viki Aris Darmawan',
    },
    {
      email: '23312010.ppm@students.poltek-kampar.ac.id',
      name: 'Afiq Satya Wisnu',
    },
    {
      email: '23312011.ppm@students.poltek-kampar.ac.id',
      name: 'Ananda Faris Kurniawan',
    },
    { email: '23312012.ppm@students.poltek-kampar.ac.id', name: 'Andre' },
    { email: '23312013.ppm@students.poltek-kampar.ac.id', name: 'Antoni' },
    {
      email: '23312014.ppm@students.poltek-kampar.ac.id',
      name: 'Ardinda Guspa Anggara',
    },
    {
      email: '23312015.ppm@students.poltek-kampar.ac.id',
      name: 'Arief Zakia Alfaro',
    },
    {
      email: '23312016.ppm@students.poltek-kampar.ac.id',
      name: 'Azizan El Hakim',
    },
    {
      email: '23312017.ppm@students.poltek-kampar.ac.id',
      name: 'Bangun Subekti',
    },
    { email: '23312018.ppm@students.poltek-kampar.ac.id', name: 'David Akmal' },
    {
      email: '23312019.ppm@students.poltek-kampar.ac.id',
      name: 'Defa Ilham Afdila',
    },
    {
      email: '23312020.ppm@students.poltek-kampar.ac.id',
      name: 'Dimas Abrianto',
    },
    {
      email: '23312021.ppm@students.poltek-kampar.ac.id',
      name: 'Efvindra Rhadyansyah',
    },
    {
      email: '23312022.ppm@students.poltek-kampar.ac.id',
      name: 'Emmanuella Maretia',
    },
    { email: '23312023.ppm@students.poltek-kampar.ac.id', name: 'Fahrurozi' },
    {
      email: '23312024.ppm@students.poltek-kampar.ac.id',
      name: 'Farras Tsany Aziz',
    },
    {
      email: '23312025.ppm@students.poltek-kampar.ac.id',
      name: 'Fatkhul Wahab',
    },
    {
      email: '23312026.ppm@students.poltek-kampar.ac.id',
      name: 'Febri Yolanda',
    },
    {
      email: '23312027.ppm@students.poltek-kampar.ac.id',
      name: 'Fiqih Choirul',
    },
    {
      email: '23312028.ppm@students.poltek-kampar.ac.id',
      name: 'Firmansyah Putra',
    },
    {
      email: '23312029.ppm@students.poltek-kampar.ac.id',
      name: 'Genda Agustian',
    },
    { email: '23312030.ppm@students.poltek-kampar.ac.id', name: 'Gevrin' },
    {
      email: '23312031.ppm@students.poltek-kampar.ac.id',
      name: 'Hani Afri Tya',
    },
    { email: '23312032.ppm@students.poltek-kampar.ac.id', name: 'Imam Muklas' },
    {
      email: '23312033.ppm@students.poltek-kampar.ac.id',
      name: 'Indri Meilani Br. Saragih',
    },
    {
      email: '23312034.ppm@students.poltek-kampar.ac.id',
      name: 'Letizio Ortiza',
    },
    {
      email: '23312035.ppm@students.poltek-kampar.ac.id',
      name: 'Lutfi Nur Aziz',
    },
    {
      email: '23312036.ppm@students.poltek-kampar.ac.id',
      name: 'M. Ifrohil Umam',
    },
    {
      email: '23312037.ppm@students.poltek-kampar.ac.id',
      name: 'Maria Magdalena Silalahi',
    },
    {
      email: '23312038.ppm@students.poltek-kampar.ac.id',
      name: 'Mhd. Fihram Ray',
    },
    {
      email: '23312039.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Bagus Rahmaji',
    },
    {
      email: '23312040.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Ilham',
    },
    {
      email: '23312041.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Kenny Adhandy',
    },
    {
      email: '23312042.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Vebri Waldiansyah',
    },
    {
      email: '23312043.ppm@students.poltek-kampar.ac.id',
      name: 'Ni Komang Desi Anggreni Asih',
    },
    {
      email: '23312044.ppm@students.poltek-kampar.ac.id',
      name: 'Padil Tabliq',
    },
    {
      email: '23312045.ppm@students.poltek-kampar.ac.id',
      name: 'Pertiwi Br. Purba',
    },
    { email: '23312046.ppm@students.poltek-kampar.ac.id', name: 'Revandi' },
    {
      email: '23312047.ppm@students.poltek-kampar.ac.id',
      name: 'Rifgy Thio Syanrezi',
    },
    {
      email: '23312048.ppm@students.poltek-kampar.ac.id',
      name: 'Rika Rosalina',
    },
    {
      email: '23312049.ppm@students.poltek-kampar.ac.id',
      name: 'Riyanda Prandika',
    },
    {
      email: '23312050.ppm@students.poltek-kampar.ac.id',
      name: 'Romi Oktarian',
    },
    {
      email: '23312051.ppm@students.poltek-kampar.ac.id',
      name: 'Rusyidi Hamdi Daulay',
    },
    {
      email: '23312052.ppm@students.poltek-kampar.ac.id',
      name: 'Ryan Arianto',
    },
    {
      email: '23312053.ppm@students.poltek-kampar.ac.id',
      name: 'Sandi Dwianto',
    },
    {
      email: '23312054.ppm@students.poltek-kampar.ac.id',
      name: 'Sigit Tri Susanto',
    },
    {
      email: '23312055.ppm@students.poltek-kampar.ac.id',
      name: 'Steven Saputra',
    },
    {
      email: '23312056.ppm@students.poltek-kampar.ac.id',
      name: 'Styven Charly Sipayung',
    },
    {
      email: '23312057.ppm@students.poltek-kampar.ac.id',
      name: 'Suzuka Niko Pratama',
    },
    {
      email: '23312058.ppm@students.poltek-kampar.ac.id',
      name: 'Tandu Rasolance Gultom',
    },
    {
      email: '23312059.ppm@students.poltek-kampar.ac.id',
      name: 'Wahyu Permadi',
    },
    {
      email: '23312060.ppm@students.poltek-kampar.ac.id',
      name: 'Willi Pasaribu',
    },
    {
      email: '23312061.ppm@students.poltek-kampar.ac.id',
      name: 'Yulian Br Sembiring',
    },
    {
      email: '23312062.ppm@students.poltek-kampar.ac.id',
      name: 'Zakky Al Naufal',
    },
    {
      email: '23312063.ppm@students.poltek-kampar.ac.id',
      name: 'Zeldra Noptalesa',
    },
    {
      email: '23312064.ppm@students.poltek-kampar.ac.id',
      name: 'Zidan Fathi Madani',
    },
    {
      email: '23313002.tif@students.poltek-kampar.ac.id',
      name: 'Sefina Aulia Putri',
    },
    {
      email: '23313003.tif@students.poltek-kampar.ac.id',
      name: 'Hotman Fernando Simarmata',
    },
    {
      email: '23313004.tif@students.poltek-kampar.ac.id',
      name: 'Nurul Rahma Hidayani',
    },
    { email: '23313005.tif@students.poltek-kampar.ac.id', name: 'M. Hasri' },
    {
      email: '23313006.tif@students.poltek-kampar.ac.id',
      name: 'Nilam Permata',
    },
    {
      email: '23313007.tif@students.poltek-kampar.ac.id',
      name: 'Fatra Ramadhini',
    },
    {
      email: '23313008.tif@students.poltek-kampar.ac.id',
      name: 'Nabila Fadilah Ihsan',
    },
    {
      email: '23313009.tif@students.poltek-kampar.ac.id',
      name: 'Afni Rahmaliawati',
    },
    {
      email: '23313010.tif@students.poltek-kampar.ac.id',
      name: 'Alwi Arisandy Pasaribu',
    },
    {
      email: '23313011.tif@students.poltek-kampar.ac.id',
      name: 'Arif Ariyanto',
    },
    {
      email: '23313012.tif@students.poltek-kampar.ac.id',
      name: 'Athikah Dwi Hapsari',
    },
    {
      email: '23313013.tif@students.poltek-kampar.ac.id',
      name: 'Devan Zaky Hartadinata',
    },
    {
      email: '23313014.tif@students.poltek-kampar.ac.id',
      name: 'Diah Ayu Wardani',
    },
    {
      email: '23313015.tif@students.poltek-kampar.ac.id',
      name: 'Egi Rizky Tri Andrian',
    },
    {
      email: '23313016.tif@students.poltek-kampar.ac.id',
      name: 'Herdy Yanti. B',
    },
    { email: '23313017.tif@students.poltek-kampar.ac.id', name: 'Icha Kurnia' },
    {
      email: '23313018.tif@students.poltek-kampar.ac.id',
      name: 'Khalisa Rahma Putri',
    },
    {
      email: '23313019.tif@students.poltek-kampar.ac.id',
      name: 'Luthfi Fuad Radityawan',
    },
    {
      email: '23313020.tif@students.poltek-kampar.ac.id',
      name: 'M. Hanif Hidayatullah',
    },
    {
      email: '23313021.tif@students.poltek-kampar.ac.id',
      name: 'Muhamad Hafid Farezi',
    },
    {
      email: '23313022.tif@students.poltek-kampar.ac.id',
      name: 'Muhammad Rizki Ananda Siregar',
    },
    {
      email: '23313023.tif@students.poltek-kampar.ac.id',
      name: 'Najaruddin Munthe',
    },
    {
      email: '23313024.tif@students.poltek-kampar.ac.id',
      name: 'Nanda Nurdiana',
    },
    {
      email: '23313025.tif@students.poltek-kampar.ac.id',
      name: 'Nurcahaya Br Raja Gukguk',
    },
    {
      email: '23313026.tif@students.poltek-kampar.ac.id',
      name: 'Putri Amelia',
    },
    {
      email: '23313027.tif@students.poltek-kampar.ac.id',
      name: 'Putri Jelita Br Lumban Gaol',
    },
    {
      email: '23313028.tif@students.poltek-kampar.ac.id',
      name: 'Rahayu Anggun Eka Rizfi',
    },
    {
      email: '23313029.tif@students.poltek-kampar.ac.id',
      name: 'Randa Pratama Putra',
    },
    {
      email: '23313030.tif@students.poltek-kampar.ac.id',
      name: 'Ricci Aurel Jouana',
    },
    {
      email: '23313031.tif@students.poltek-kampar.ac.id',
      name: 'Sandi Pandu Wijaya',
    },
    {
      email: '23313032.tif@students.poltek-kampar.ac.id',
      name: 'Sella Ramadhani',
    },
    {
      email: '23313033.tif@students.poltek-kampar.ac.id',
      name: 'Sherthika Rahmah',
    },
    {
      email: '23313034.tif@students.poltek-kampar.ac.id',
      name: 'Siti Hanisah Nasution',
    },
    {
      email: '23313035.tif@students.poltek-kampar.ac.id',
      name: 'Syahriah Septia',
    },
    {
      email: '23313036.tif@students.poltek-kampar.ac.id',
      name: 'Yuli Rahmawati',
    },
    {
      email: '23313037.tif@students.poltek-kampar.ac.id',
      name: 'Zikran Maulana',
    },
    { email: '23313038.tif@students.poltek-kampar.ac.id', name: 'Nur Baiti' },
    {
      email: '23313039.tif@students.poltek-kampar.ac.id',
      name: 'Suci Nugraini',
    },
    {
      email: '23414001.abi@students.poltek-kampar.ac.id',
      name: 'Novia Ananda',
    },
    {
      email: '23414002.abi@students.poltek-kampar.ac.id',
      name: 'Pipy Sri Jupita',
    },
    {
      email: '23414003.abi@students.poltek-kampar.ac.id',
      name: 'Mona Endilila ',
    },
    {
      email: '23414004.abi@students.poltek-kampar.ac.id',
      name: 'Muhammad Asshiddiqie',
    },
    {
      email: '23414005.abi@students.poltek-kampar.ac.id',
      name: 'Rizki Ardiansah',
    },
    {
      email: '23414006.abi@students.poltek-kampar.ac.id',
      name: 'Hanifa Humaira',
    },
    {
      email: '242105001.tpks@students.poltek-kampar.ac.id',
      name: 'Agung Pra Setio',
    },
    {
      email: '242105002.tpks@students.poltek-kampar.ac.id',
      name: 'Ainun Nur Indah',
    },
    {
      email: '242105003.tpks@students.poltek-kampar.ac.id',
      name: 'Ali Asman Hutauruk',
    },
    {
      email: '242105004.tpks@students.poltek-kampar.ac.id',
      name: 'Cindy Ardiantika',
    },
    {
      email: '242105005.tpks@students.poltek-kampar.ac.id',
      name: 'Dewi Rahayu Hura',
    },
    {
      email: '242105006.tpks@students.poltek-kampar.ac.id',
      name: 'Eka Melati',
    },
    {
      email: '242105007.tpks@students.poltek-kampar.ac.id',
      name: 'Fadila Ayusmi',
    },
    {
      email: '242105008.tpks@students.poltek-kampar.ac.id',
      name: 'Fadzli Muhammad Fahlepi Tarigan',
    },
    {
      email: '242105009.tpks@students.poltek-kampar.ac.id',
      name: 'Firdaus Roby',
    },
    {
      email: '242105010.tpks@students.poltek-kampar.ac.id',
      name: 'Ina Musyarofah',
    },
    {
      email: '242105012.tpks@students.poltek-kampar.ac.id',
      name: 'Kevin Leo Aditya',
    },
    {
      email: '242105013.tpks@students.poltek-kampar.ac.id',
      name: 'Leonel Messi Lubis',
    },
    {
      email: '242105014.tpks@students.poltek-kampar.ac.id',
      name: 'Lika Aulidri',
    },
    {
      email: '242105015.tpks@students.poltek-kampar.ac.id',
      name: 'Maulana Ikhsan',
    },
    {
      email: '242105016.tpks@students.poltek-kampar.ac.id',
      name: 'Nabila Gusmiva Putri',
    },
    {
      email: '242105017.tpks@students.poltek-kampar.ac.id',
      name: 'Nur Anggina',
    },
    { email: '242105018.tpks@students.poltek-kampar.ac.id', name: 'Nur Iksan' },
    {
      email: '242105019.tpks@students.poltek-kampar.ac.id',
      name: 'Nur Ismi Sinurat',
    },
    {
      email: '242105020.tpks@students.poltek-kampar.ac.id',
      name: 'Opi Saputra Halawa',
    },
    {
      email: '242105021.tpks@students.poltek-kampar.ac.id',
      name: 'Resti Inke Sari',
    },
    {
      email: '242105022.tpks@students.poltek-kampar.ac.id',
      name: 'Restu Hidayatullah',
    },
    {
      email: '242105023.tpks@students.poltek-kampar.ac.id',
      name: 'Riko Febriansyah',
    },
    {
      email: '242105024.tpks@students.poltek-kampar.ac.id',
      name: 'Roby Al Fahri Manurung',
    },
    {
      email: '242105025.tpks@students.poltek-kampar.ac.id',
      name: 'Sinta Nurdilla',
    },
    {
      email: '242105026.tpks@students.poltek-kampar.ac.id',
      name: 'Siti Nurhalimah Br Tumanggor',
    },
    {
      email: '242105027.tpks@students.poltek-kampar.ac.id',
      name: 'Tengku Anif Akbar',
    },
    {
      email: '242105028.tpks@students.poltek-kampar.ac.id',
      name: 'Tri Rahayu Wulandari',
    },
    {
      email: '242105029.tpks@students.poltek-kampar.ac.id',
      name: 'Yoga Permana Siregar',
    },
    {
      email: '242105030.tpks@students.poltek-kampar.ac.id',
      name: 'Zidhan Ariyan Kustanto',
    },
    {
      email: '243101001.tps@students.poltek-kampar.ac.id',
      name: 'Aldi Fatjri',
    },
    {
      email: '243101002.tps@students.poltek-kampar.ac.id',
      name: 'Ananda Rizky Kurniawan',
    },
    {
      email: '243101003.tps@students.poltek-kampar.ac.id',
      name: 'Dani Armansyah',
    },
    { email: '243101004.tps@students.poltek-kampar.ac.id', name: 'M. Rihan' },
    {
      email: '243101005.tps@students.poltek-kampar.ac.id',
      name: 'Mhd. Refly Zikri',
    },
    {
      email: '243101006.tps@students.poltek-kampar.ac.id',
      name: 'Rangga Sabastian Ambarita',
    },
    {
      email: '243101007.tps@students.poltek-kampar.ac.id',
      name: 'Rayhan Kurniawan',
    },
    {
      email: '243101008.tps@students.poltek-kampar.ac.id',
      name: 'Ahmad Habibi',
    },
    {
      email: '243101009.tps@students.poltek-kampar.ac.id',
      name: 'Al Rifky Mahesa Pratama',
    },
    { email: '243101010.tps@students.poltek-kampar.ac.id', name: 'Arsyad' },
    {
      email: '243101011.tps@students.poltek-kampar.ac.id',
      name: 'Doni Suhandra',
    },
    {
      email: '243101012.tps@students.poltek-kampar.ac.id',
      name: 'Dwi Syalsanabila',
    },
    {
      email: '243101013.tps@students.poltek-kampar.ac.id',
      name: 'Farel Muhardika Sirait',
    },
    {
      email: '243101014.tps@students.poltek-kampar.ac.id',
      name: 'Faris Apriansyah',
    },
    {
      email: '243101015.tps@students.poltek-kampar.ac.id',
      name: 'Fatur Rahman Alkahfi',
    },
    {
      email: '243101016.tps@students.poltek-kampar.ac.id',
      name: 'Fikri Akmal',
    },
    {
      email: '243101017.tps@students.poltek-kampar.ac.id',
      name: 'Fitri Amelia',
    },
    {
      email: '243101018.tps@students.poltek-kampar.ac.id',
      name: 'Haikal Zain Hawari Siregar',
    },
    {
      email: '243101019.tps@students.poltek-kampar.ac.id',
      name: 'Jeksen Hutahayan',
    },
    {
      email: '243101020.tps@students.poltek-kampar.ac.id',
      name: 'M. Navisa Albani',
    },
    {
      email: '243101021.tps@students.poltek-kampar.ac.id',
      name: 'Marganda Simanjuntak',
    },
    {
      email: '243101022.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Arrijal Kamil',
    },
    {
      email: '243101023.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Rizan Dinata',
    },
    {
      email: '243101024.tps@students.poltek-kampar.ac.id',
      name: 'Nanda Fahrian Hadi',
    },
    { email: '243101025.tps@students.poltek-kampar.ac.id', name: 'Nelson. S' },
    {
      email: '243101026.tps@students.poltek-kampar.ac.id',
      name: 'Novelia Afriyani',
    },
    {
      email: '243101027.tps@students.poltek-kampar.ac.id',
      name: 'Rafizar Alfad',
    },
    {
      email: '243101028.tps@students.poltek-kampar.ac.id',
      name: 'Rahul Aflah Marta',
    },
    {
      email: '243101029.tps@students.poltek-kampar.ac.id',
      name: 'Ray Gamilang',
    },
    {
      email: '243101030.tps@students.poltek-kampar.ac.id',
      name: 'Rehan Waliudin',
    },
    {
      email: '243101031.tps@students.poltek-kampar.ac.id',
      name: 'Restu Nurfendi',
    },
    {
      email: '243101032.tps@students.poltek-kampar.ac.id',
      name: 'Rezki Kurniawan',
    },
    {
      email: '243101033.tps@students.poltek-kampar.ac.id',
      name: 'Agung Hadistia Fauzan',
    },
    {
      email: '243101034.tps@students.poltek-kampar.ac.id',
      name: 'Ahan Setiawan',
    },
    {
      email: '243101035.tps@students.poltek-kampar.ac.id',
      name: 'Andini Natasyah',
    },
    {
      email: '243101036.tps@students.poltek-kampar.ac.id',
      name: 'Arizal Hanapi',
    },
    { email: '243101037.tps@students.poltek-kampar.ac.id', name: 'Desi Aulia' },
    {
      email: '243101038.tps@students.poltek-kampar.ac.id',
      name: 'Divo Nurkholiq',
    },
    {
      email: '243101039.tps@students.poltek-kampar.ac.id',
      name: 'Fazli Alamsyah',
    },
    {
      email: '243101040.tps@students.poltek-kampar.ac.id',
      name: 'Febrina Tri Syakila',
    },
    {
      email: '243101041.tps@students.poltek-kampar.ac.id',
      name: 'Feby Herawati',
    },
    {
      email: '243101042.tps@students.poltek-kampar.ac.id',
      name: 'Frans Roni L Simanjuntak',
    },
    {
      email: '243101043.tps@students.poltek-kampar.ac.id',
      name: 'Haikal Ferdi Hakim. Hs',
    },
    { email: '243101044.tps@students.poltek-kampar.ac.id', name: 'Ical' },
    { email: '243101045.tps@students.poltek-kampar.ac.id', name: 'Indah' },
    {
      email: '243101046.tps@students.poltek-kampar.ac.id',
      name: 'Jeremi Bernaldo Purba',
    },
    {
      email: '243101047.tps@students.poltek-kampar.ac.id',
      name: 'Jhonatan Marpaung',
    },
    {
      email: '243101048.tps@students.poltek-kampar.ac.id',
      name: 'Jimi Mas Ardianto',
    },
    {
      email: '243101049.tps@students.poltek-kampar.ac.id',
      name: 'Juheri Fizay Setia Wijaya',
    },
    {
      email: '243101050.tps@students.poltek-kampar.ac.id',
      name: 'Khoirotus Salbiyah Hasibuan',
    },
    {
      email: '243101051.tps@students.poltek-kampar.ac.id',
      name: 'Lilis Suryani Zendrato',
    },
    {
      email: '243101052.tps@students.poltek-kampar.ac.id',
      name: 'M. Holo Hudri',
    },
    {
      email: '243101053.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Fahril Fauzi',
    },
    {
      email: '243101054.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Zaki Nurul Ngalam',
    },
    {
      email: '243101055.tps@students.poltek-kampar.ac.id',
      name: 'Perwira Saut Sihotang',
    },
    {
      email: '243101056.tps@students.poltek-kampar.ac.id',
      name: 'Ronda Mulia',
    },
    {
      email: '243101057.tps@students.poltek-kampar.ac.id',
      name: 'Siti Asiyah',
    },
    {
      email: '243101058.tps@students.poltek-kampar.ac.id',
      name: 'Tiara Aulia Sabrina',
    },
    {
      email: '243101059.tps@students.poltek-kampar.ac.id',
      name: 'Triana Sari Br Manullang',
    },
    {
      email: '243101060.tps@students.poltek-kampar.ac.id',
      name: 'Widya Dwi Putri',
    },
    {
      email: '243101061.tps@students.poltek-kampar.ac.id',
      name: 'Yohana Br. Tarigan',
    },
    {
      email: '243101062.tps@students.poltek-kampar.ac.id',
      name: 'Zihan Lestari',
    },
    {
      email: '243101063.tps@students.poltek-kampar.ac.id',
      name: 'Abdul Raziq Zain',
    },
    {
      email: '243101064.tps@students.poltek-kampar.ac.id',
      name: 'Aditya Maulana Nasution',
    },
    {
      email: '243101065.tps@students.poltek-kampar.ac.id',
      name: 'Ahmad Kuzwini',
    },
    {
      email: '243101066.tps@students.poltek-kampar.ac.id',
      name: 'Akhmad Ali Firdaus',
    },
    {
      email: '243101067.tps@students.poltek-kampar.ac.id',
      name: 'Arul Maulana',
    },
    {
      email: '243101068.tps@students.poltek-kampar.ac.id',
      name: 'Bambang Syahputra',
    },
    {
      email: '243101069.tps@students.poltek-kampar.ac.id',
      name: 'Bilqis Safinatun Najjah',
    },
    {
      email: '243101070.tps@students.poltek-kampar.ac.id',
      name: 'Chika Andini Leony Sitinjak',
    },
    {
      email: '243101071.tps@students.poltek-kampar.ac.id',
      name: 'Deni Ardiansyah',
    },
    {
      email: '243101072.tps@students.poltek-kampar.ac.id',
      name: 'Dini Rahmalia',
    },
    {
      email: '243101073.tps@students.poltek-kampar.ac.id',
      name: 'Dzakki Nauval Zahir',
    },
    {
      email: '243101074.tps@students.poltek-kampar.ac.id',
      name: 'Elsa Novaria Sinaga',
    },
    {
      email: '243101075.tps@students.poltek-kampar.ac.id',
      name: 'Farel Ariel Cusniadi Sihombing',
    },
    {
      email: '243101076.tps@students.poltek-kampar.ac.id',
      name: 'Fatwa Nur Azizi',
    },
    {
      email: '243101077.tps@students.poltek-kampar.ac.id',
      name: 'Fhanti Adisti',
    },
    {
      email: '243101078.tps@students.poltek-kampar.ac.id',
      name: 'Irma Sopia Riskiyana',
    },
    {
      email: '243101079.tps@students.poltek-kampar.ac.id',
      name: 'Janna Jesika',
    },
    {
      email: '243101080.tps@students.poltek-kampar.ac.id',
      name: 'M. Lukman Nurhayat',
    },
    {
      email: '243101081.tps@students.poltek-kampar.ac.id',
      name: 'Mei Lutfi Andriyani',
    },
    {
      email: '243101082.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Zack Lee Maldini',
    },
    {
      email: '243101083.tps@students.poltek-kampar.ac.id',
      name: 'Nurmala Sari',
    },
    {
      email: '243101084.tps@students.poltek-kampar.ac.id',
      name: 'Oland Andreanno Prakoso',
    },
    {
      email: '243101085.tps@students.poltek-kampar.ac.id',
      name: 'Peby Almaidah',
    },
    {
      email: '243101086.tps@students.poltek-kampar.ac.id',
      name: 'Riska Rivia Handayani',
    },
    {
      email: '243101087.tps@students.poltek-kampar.ac.id',
      name: 'Risky Maulana',
    },
    {
      email: '243101088.tps@students.poltek-kampar.ac.id',
      name: 'Senopati Pamungkas',
    },
    {
      email: '243101089.tps@students.poltek-kampar.ac.id',
      name: 'Siti Maqhfiroh',
    },
    {
      email: '243101090.tps@students.poltek-kampar.ac.id',
      name: 'Wahyu Nugroho',
    },
    {
      email: '243101091.tps@students.poltek-kampar.ac.id',
      name: 'Wanda Syaprianto',
    },
    {
      email: '243101092.tps@students.poltek-kampar.ac.id',
      name: 'Yohana Melany Putri Br Nadapdap',
    },
    {
      email: '243101093.tps@students.poltek-kampar.ac.id',
      name: 'Adli Ashrori Nst',
    },
    {
      email: '243101094.tps@students.poltek-kampar.ac.id',
      name: 'Alexander Theofilus Klau',
    },
    {
      email: '243101095.tps@students.poltek-kampar.ac.id',
      name: 'Alfiatun Nurfadillah',
    },
    { email: '243101096.tps@students.poltek-kampar.ac.id', name: 'Alia Sari' },
    { email: '243101097.tps@students.poltek-kampar.ac.id', name: 'Alpinur' },
    {
      email: '243101098.tps@students.poltek-kampar.ac.id',
      name: 'Dhea Ayu Ningrum',
    },
    {
      email: '243101099.tps@students.poltek-kampar.ac.id',
      name: 'Dian Hadikusuma',
    },
    {
      email: '243101100.tps@students.poltek-kampar.ac.id',
      name: 'Eny Wardani',
    },
    {
      email: '243101101.tps@students.poltek-kampar.ac.id',
      name: 'Ita Saraswati',
    },
    {
      email: '243101102.tps@students.poltek-kampar.ac.id',
      name: 'Julius Hadi Nata',
    },
    {
      email: '243101103.tps@students.poltek-kampar.ac.id',
      name: 'Leo Andrean',
    },
    {
      email: '243101104.tps@students.poltek-kampar.ac.id',
      name: 'Lili Yana Lidya',
    },
    {
      email: '243101105.tps@students.poltek-kampar.ac.id',
      name: 'M. Dea Fajrianto',
    },
    {
      email: '243101106.tps@students.poltek-kampar.ac.id',
      name: 'Michael Marbun',
    },
    {
      email: '243101107.tps@students.poltek-kampar.ac.id',
      name: 'Mona Marsela',
    },
    {
      email: '243101108.tps@students.poltek-kampar.ac.id',
      name: 'Muhamad Ilyas Rambe',
    },
    {
      email: '243101109.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Ikhlas Al Ghiffari',
    },
    {
      email: '243101110.tps@students.poltek-kampar.ac.id',
      name: 'Nandito Pernando',
    },
    {
      email: '243101111.tps@students.poltek-kampar.ac.id',
      name: 'Nori Khaslina K',
    },
    {
      email: '243101112.tps@students.poltek-kampar.ac.id',
      name: 'Pandi Dwinata',
    },
    {
      email: '243101113.tps@students.poltek-kampar.ac.id',
      name: 'Raihan Fachlevi',
    },
    {
      email: '243101114.tps@students.poltek-kampar.ac.id',
      name: 'Rini Cahyaning Tyas',
    },
    {
      email: '243101115.tps@students.poltek-kampar.ac.id',
      name: 'Samuel Situmorang',
    },
    {
      email: '243101116.tps@students.poltek-kampar.ac.id',
      name: 'Shomadil Arif Ananda Brutu',
    },
    {
      email: '243101117.tps@students.poltek-kampar.ac.id',
      name: 'Theresia Ani',
    },
    { email: '243101118.tps@students.poltek-kampar.ac.id', name: 'Tifani' },
    {
      email: '243101119.tps@students.poltek-kampar.ac.id',
      name: 'Triana Desfarika',
    },
    {
      email: '243101120.tps@students.poltek-kampar.ac.id',
      name: 'Wahyu Radja Pratama',
    },
    {
      email: '243101121.tps@students.poltek-kampar.ac.id',
      name: 'Yeremia Putra Sinaga',
    },
    {
      email: '243101122.tps@students.poltek-kampar.ac.id',
      name: 'Yusnita Putri Purba',
    },
    { email: '243102001.ppm@students.poltek-kampar.ac.id', name: 'Agus Farel' },
    {
      email: '243102002.ppm@students.poltek-kampar.ac.id',
      name: 'Ahmad Nanda Hasibuan',
    },
    { email: '243102003.ppm@students.poltek-kampar.ac.id', name: 'Ari Yandi' },
    {
      email: '243102004.ppm@students.poltek-kampar.ac.id',
      name: 'Ari Yudhistira',
    },
    {
      email: '243102005.ppm@students.poltek-kampar.ac.id',
      name: 'Chelsea Putri Agustina',
    },
    {
      email: '243102006.ppm@students.poltek-kampar.ac.id',
      name: 'Dedek Susantina',
    },
    {
      email: '243102007.ppm@students.poltek-kampar.ac.id',
      name: 'Dimas Permadi Nugraha',
    },
    {
      email: '243102008.ppm@students.poltek-kampar.ac.id',
      name: 'Fajar Ardiansyah Saputra',
    },
    {
      email: '243102009.ppm@students.poltek-kampar.ac.id',
      name: 'Frans Michael Pandiangan',
    },
    {
      email: '243102010.ppm@students.poltek-kampar.ac.id',
      name: 'Gunawan Saputra S',
    },
    { email: '243102011.ppm@students.poltek-kampar.ac.id', name: 'Habib Albi' },
    {
      email: '243102012.ppm@students.poltek-kampar.ac.id',
      name: 'Halba Ramadhani Putri',
    },
    {
      email: '243102013.ppm@students.poltek-kampar.ac.id',
      name: 'Ibrahim Bayzuhri Siregar',
    },
    {
      email: '243102014.ppm@students.poltek-kampar.ac.id',
      name: 'Jefry Setyawan',
    },
    {
      email: '243102015.ppm@students.poltek-kampar.ac.id',
      name: 'Kevin Julio Rasyah',
    },
    {
      email: '243102016.ppm@students.poltek-kampar.ac.id',
      name: 'Khairil Sahru',
    },
    {
      email: '243102017.ppm@students.poltek-kampar.ac.id',
      name: 'M. Alfi Syahri',
    },
    {
      email: '243102018.ppm@students.poltek-kampar.ac.id',
      name: 'M. Raihan Zacky',
    },
    {
      email: '243102019.ppm@students.poltek-kampar.ac.id',
      name: 'Maulana Ihsan Hafizd',
    },
    {
      email: '243102020.ppm@students.poltek-kampar.ac.id',
      name: 'Mohammad Habibi Harefa',
    },
    {
      email: '243102021.ppm@students.poltek-kampar.ac.id',
      name: 'Muh. Ikhwan Al-Aqsha',
    },
    {
      email: '243102022.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Alam Nugraha',
    },
    {
      email: '243102023.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Dio',
    },
    {
      email: '243102024.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Harun Arrasyid',
    },
    {
      email: '243102025.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Rafli',
    },
    {
      email: '243102026.ppm@students.poltek-kampar.ac.id',
      name: 'Peri Saputra',
    },
    {
      email: '243102027.ppm@students.poltek-kampar.ac.id',
      name: 'Puji Febriadi Nababan',
    },
    {
      email: '243102028.ppm@students.poltek-kampar.ac.id',
      name: 'Rafi Zulkarnain',
    },
    {
      email: '243102029.ppm@students.poltek-kampar.ac.id',
      name: 'Raharjo Putro',
    },
    {
      email: '243102030.ppm@students.poltek-kampar.ac.id',
      name: 'Raul Junio Ditan',
    },
    {
      email: '243102031.ppm@students.poltek-kampar.ac.id',
      name: 'Aan Deka Puri',
    },
    { email: '243102032.ppm@students.poltek-kampar.ac.id', name: 'Abdul Aziz' },
    {
      email: '243102033.ppm@students.poltek-kampar.ac.id',
      name: 'Agung Laksono',
    },
    {
      email: '243102034.ppm@students.poltek-kampar.ac.id',
      name: 'Agus Arian Diningrat',
    },
    {
      email: '243102035.ppm@students.poltek-kampar.ac.id',
      name: 'Alfridus Nahak',
    },
    { email: '243102036.ppm@students.poltek-kampar.ac.id', name: 'Ama' },
    {
      email: '243102037.ppm@students.poltek-kampar.ac.id',
      name: 'Andri Mukhlisin',
    },
    {
      email: '243102038.ppm@students.poltek-kampar.ac.id',
      name: 'Asril Zonaris Sitinjak',
    },
    {
      email: '243102039.ppm@students.poltek-kampar.ac.id',
      name: 'Aulia Rakhman',
    },
    {
      email: '243102040.ppm@students.poltek-kampar.ac.id',
      name: 'Azis Aji Pangestu',
    },
    {
      email: '243102041.ppm@students.poltek-kampar.ac.id',
      name: 'Betrand Prayugi Simarmata',
    },
    {
      email: '243102042.ppm@students.poltek-kampar.ac.id',
      name: 'Dafa Rivaldo, Nst',
    },
    {
      email: '243102043.ppm@students.poltek-kampar.ac.id',
      name: 'Diki Ardiansyah',
    },
    { email: '243102044.ppm@students.poltek-kampar.ac.id', name: 'Diky' },
    {
      email: '243102045.ppm@students.poltek-kampar.ac.id',
      name: 'Dio Triandi Putra',
    },
    {
      email: '243102046.ppm@students.poltek-kampar.ac.id',
      name: 'Eka Satria Pujiansyah',
    },
    {
      email: '243102047.ppm@students.poltek-kampar.ac.id',
      name: 'Fransisko Fean',
    },
    {
      email: '243102048.ppm@students.poltek-kampar.ac.id',
      name: 'Irfan Dwi Septian Aryanto',
    },
    {
      email: '243102049.ppm@students.poltek-kampar.ac.id',
      name: 'Kristiani Dame Rotua',
    },
    { email: '243102050.ppm@students.poltek-kampar.ac.id', name: 'Lidia' },
    { email: '243102051.ppm@students.poltek-kampar.ac.id', name: 'Mat Surya' },
    {
      email: '243102052.ppm@students.poltek-kampar.ac.id',
      name: 'Milanda Rahman',
    },
    {
      email: '243102053.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Daffa Pratama',
    },
    {
      email: '243102054.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Risfal',
    },
    {
      email: '243102055.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Salim',
    },
    {
      email: '243102056.ppm@students.poltek-kampar.ac.id',
      name: 'Nungki Adwin Putra',
    },
    {
      email: '243102057.ppm@students.poltek-kampar.ac.id',
      name: 'Nur Wahid Arifin',
    },
    {
      email: '243102058.ppm@students.poltek-kampar.ac.id',
      name: 'Octary Ramadhani',
    },
    {
      email: '243102059.ppm@students.poltek-kampar.ac.id',
      name: 'Reinaldo Cristian Sagala',
    },
    {
      email: '243102060.ppm@students.poltek-kampar.ac.id',
      name: 'Tyo Armiyando',
    },
    {
      email: '243102061.ppm@students.poltek-kampar.ac.id',
      name: 'Ade Irawan Siregar',
    },
    {
      email: '243102062.ppm@students.poltek-kampar.ac.id',
      name: 'Adhitya Prasetyo',
    },
    {
      email: '243102063.ppm@students.poltek-kampar.ac.id',
      name: 'Ananda Saputra Pratama',
    },
    {
      email: '243102064.ppm@students.poltek-kampar.ac.id',
      name: 'Asep Saputro',
    },
    {
      email: '243102065.ppm@students.poltek-kampar.ac.id',
      name: 'Dimas Dwi Yana',
    },
    {
      email: '243102066.ppm@students.poltek-kampar.ac.id',
      name: 'Febri Suryadi',
    },
    {
      email: '243102067.ppm@students.poltek-kampar.ac.id',
      name: 'Gilang Maulana Putra',
    },
    {
      email: '243102068.ppm@students.poltek-kampar.ac.id',
      name: 'Hikmah Yosi Raihan',
    },
    {
      email: '243102069.ppm@students.poltek-kampar.ac.id',
      name: 'Ikhlas Hakiki',
    },
    {
      email: '243102070.ppm@students.poltek-kampar.ac.id',
      name: 'Iqram Anshori',
    },
    {
      email: '243102071.ppm@students.poltek-kampar.ac.id',
      name: 'Jamil Nasution',
    },
    { email: '243102072.ppm@students.poltek-kampar.ac.id', name: 'Juliando' },
    {
      email: '243102073.ppm@students.poltek-kampar.ac.id',
      name: 'Lyga Syah Fadlan',
    },
    {
      email: '243102074.ppm@students.poltek-kampar.ac.id',
      name: 'M. Jihad Alfatih',
    },
    {
      email: '243102075.ppm@students.poltek-kampar.ac.id',
      name: 'Made Danu Winata',
    },
    {
      email: '243102076.ppm@students.poltek-kampar.ac.id',
      name: 'Nizamuddin Parlaungan Hsb',
    },
    {
      email: '243102077.ppm@students.poltek-kampar.ac.id',
      name: 'Pitriya Agustina Siregar',
    },
    {
      email: '243102078.ppm@students.poltek-kampar.ac.id',
      name: 'Rafisyah Dika Radwi Hadi',
    },
    {
      email: '243102079.ppm@students.poltek-kampar.ac.id',
      name: 'Ranggas Wahyudi',
    },
    {
      email: '243102080.ppm@students.poltek-kampar.ac.id',
      name: 'Revi Herlianda',
    },
    { email: '243102081.ppm@students.poltek-kampar.ac.id', name: 'Rindi Yani' },
    {
      email: '243102082.ppm@students.poltek-kampar.ac.id',
      name: 'Rizky Mei Renda',
    },
    {
      email: '243102083.ppm@students.poltek-kampar.ac.id',
      name: 'Rosyd Hazuma Sulaiman',
    },
    {
      email: '243102084.ppm@students.poltek-kampar.ac.id',
      name: 'Sapril Sandoko Sinambela',
    },
    {
      email: '243102085.ppm@students.poltek-kampar.ac.id',
      name: 'Supri Haryono Nahampun',
    },
    {
      email: '243102086.ppm@students.poltek-kampar.ac.id',
      name: 'Veri Yoni Auliya',
    },
    {
      email: '243102087.ppm@students.poltek-kampar.ac.id',
      name: 'Zacky Ramadhan',
    },
    { email: '243102088.ppm@students.poltek-kampar.ac.id', name: 'Zakaria' },
    { email: '243102089.ppm@students.poltek-kampar.ac.id', name: 'Zubaidah' },
    {
      email: '243103001.tif@students.poltek-kampar.ac.id',
      name: 'Ahmad Zikri',
    },
    {
      email: '243103002.tif@students.poltek-kampar.ac.id',
      name: 'Daffa Assyura Saragih',
    },
    {
      email: '243103003.tif@students.poltek-kampar.ac.id',
      name: 'Fahmi Rahma Utama',
    },
    {
      email: '243103004.tif@students.poltek-kampar.ac.id',
      name: 'Isti Mawardhini',
    },
    {
      email: '243103005.tif@students.poltek-kampar.ac.id',
      name: 'Lusi Arlina Putri',
    },
    {
      email: '243103006.tif@students.poltek-kampar.ac.id',
      name: 'Osima Yukari',
    },
    {
      email: '243103007.tif@students.poltek-kampar.ac.id',
      name: 'Shanez Silviana',
    },
    { email: '243103008.tif@students.poltek-kampar.ac.id', name: 'Fatma Wati' },
    {
      email: '243103009.tif@students.poltek-kampar.ac.id',
      name: 'Alya Sahyra',
    },
    {
      email: '243103010.tif@students.poltek-kampar.ac.id',
      name: 'Amanda Bela Zakiyah',
    },
    {
      email: '243103011.tif@students.poltek-kampar.ac.id',
      name: 'Aprita Lovelya Seran',
    },
    {
      email: '243103012.tif@students.poltek-kampar.ac.id',
      name: 'Dwi Rizqiawati',
    },
    {
      email: '243103013.tif@students.poltek-kampar.ac.id',
      name: 'Eka Sahfitri Hasibuan',
    },
    { email: '243103014.tif@students.poltek-kampar.ac.id', name: 'Eman' },
    {
      email: '243103015.tif@students.poltek-kampar.ac.id',
      name: 'Esa Najwa Rizal',
    },
    {
      email: '243103016.tif@students.poltek-kampar.ac.id',
      name: 'Hanny Anggraini Nante',
    },
    {
      email: '243103017.tif@students.poltek-kampar.ac.id',
      name: 'Linda Tri Utami',
    },
    {
      email: '243103018.tif@students.poltek-kampar.ac.id',
      name: 'Lucy Kendra Makarti',
    },
    {
      email: '243103019.tif@students.poltek-kampar.ac.id',
      name: 'Lusi Anggraini',
    },
    { email: '243103020.tif@students.poltek-kampar.ac.id', name: 'Mariyani' },
    {
      email: '243103021.tif@students.poltek-kampar.ac.id',
      name: 'Maulana Abdul Azis',
    },
    {
      email: '243103022.tif@students.poltek-kampar.ac.id',
      name: 'Meysa Nabila Zahra',
    },
    {
      email: '243103023.tif@students.poltek-kampar.ac.id',
      name: 'Niha Zahwa Zapira Wan Zahari Tj',
    },
    {
      email: '243103024.tif@students.poltek-kampar.ac.id',
      name: 'Nur Ardiansyah',
    },
    {
      email: '243103025.tif@students.poltek-kampar.ac.id',
      name: 'Pablo Ekskobar',
    },
    {
      email: '243103026.tif@students.poltek-kampar.ac.id',
      name: 'Raditya Faiz Suryadi',
    },
    {
      email: '243103027.tif@students.poltek-kampar.ac.id',
      name: 'Randi Saputra',
    },
    { email: '243103028.tif@students.poltek-kampar.ac.id', name: 'Rani Mutia' },
    {
      email: '243103029.tif@students.poltek-kampar.ac.id',
      name: 'Ririn Shelviani',
    },
    {
      email: '243103030.tif@students.poltek-kampar.ac.id',
      name: 'Riyan Perdhana Putra',
    },
    {
      email: '243103031.tif@students.poltek-kampar.ac.id',
      name: 'Rosa Filda Karina',
    },
    {
      email: '243103032.tif@students.poltek-kampar.ac.id',
      name: 'Sahara Magdalena Ambarita',
    },
    {
      email: '243103033.tif@students.poltek-kampar.ac.id',
      name: 'Shandy Revalyna Br Hutabarat',
    },
    {
      email: '243103034.tif@students.poltek-kampar.ac.id',
      name: 'Weni Setiana',
    },
    {
      email: '243103035.tif@students.poltek-kampar.ac.id',
      name: 'Yosua Eka Pratama Manik',
    },
    {
      email: '243103036.tif@students.poltek-kampar.ac.id',
      name: 'Yuyun Khotima',
    },
    {
      email: '243103037.tif@students.poltek-kampar.ac.id',
      name: 'Zaskya Mahaputri',
    },
    {
      email: '243103038.tif@students.poltek-kampar.ac.id',
      name: 'Zazkia Dian Khalisha',
    },
    {
      email: '243201123.tps@students.poltek-kampar.ac.id',
      name: 'RANDY WAHDAN TELAUMBANUA',
    },
    {
      email: '243201124.tps@students.poltek-kampar.ac.id',
      name: 'HAFID MUZAKI',
    },
    {
      email: '243201125.tps@students.poltek-kampar.ac.id',
      name: 'IRWANDO SIAHAAN',
    },
    {
      email: '243201126.tps@students.poltek-kampar.ac.id',
      name: 'PAHMI SINAGA',
    },
    {
      email: '244104001.abi@students.poltek-kampar.ac.id',
      name: 'Roshikah Wafa Suhailah',
    },
    {
      email: '244104002.abi@students.poltek-kampar.ac.id',
      name: 'Wulan Anggraini',
    },
    {
      email: '244104003.abi@students.poltek-kampar.ac.id',
      name: 'Azil Akbar Efendi',
    },
    {
      email: '244104004.abi@students.poltek-kampar.ac.id',
      name: 'Desi Wulandari',
    },
    {
      email: '244104005.abi@students.poltek-kampar.ac.id',
      name: 'Mhd.Adil Almu’Tasim Billah',
    },
    {
      email: '244104006.abi@students.poltek-kampar.ac.id',
      name: 'Septia Nurmita',
    },
    {
      email: '244104007.abi@students.poltek-kampar.ac.id',
      name: 'Ewi Sarlina Siregar',
    },
    {
      email: '244106001.pp@students.poltek-kampar.ac.id',
      name: 'Agnesarya Winata Manurung',
    },
    {
      email: '244106002.pp@students.poltek-kampar.ac.id',
      name: 'Anggun Permata Sari',
    },
    {
      email: '244106003.pp@students.poltek-kampar.ac.id',
      name: 'Annisa Fitria Ilmi',
    },
    {
      email: '244106004.pp@students.poltek-kampar.ac.id',
      name: 'Arifiandi Makruf',
    },
    { email: '244106005.pp@students.poltek-kampar.ac.id', name: 'Bai' },
    {
      email: '244106006.pp@students.poltek-kampar.ac.id',
      name: 'Barnabas Walela',
    },
    { email: '244106007.pp@students.poltek-kampar.ac.id', name: 'Dava Akbar' },
    {
      email: '244106008.pp@students.poltek-kampar.ac.id',
      name: 'Devia Putri Zahara',
    },
    {
      email: '244106009.pp@students.poltek-kampar.ac.id',
      name: 'Dorma Pandapotan Purba',
    },
    {
      email: '244106010.pp@students.poltek-kampar.ac.id',
      name: 'Fadilah Ramadhani',
    },
    {
      email: '244106011.pp@students.poltek-kampar.ac.id',
      name: 'Fadli Ramadani',
    },
    { email: '244106012.pp@students.poltek-kampar.ac.id', name: 'Julianto' },
    {
      email: '244106013.pp@students.poltek-kampar.ac.id',
      name: 'Lisa Akta Novika',
    },
    {
      email: '244106014.pp@students.poltek-kampar.ac.id',
      name: 'Lukman Efendi',
    },
    {
      email: '244106015.pp@students.poltek-kampar.ac.id',
      name: 'MA Bagus Perwira',
    },
    {
      email: '244106016.pp@students.poltek-kampar.ac.id',
      name: 'Martua Sitorus',
    },
    {
      email: '244106017.pp@students.poltek-kampar.ac.id',
      name: 'Maya Yolanda',
    },
    {
      email: '244106018.pp@students.poltek-kampar.ac.id',
      name: 'Miftahul Jannah Fadillah',
    },
    { email: '244106019.pp@students.poltek-kampar.ac.id', name: 'Muslihan' },
    {
      email: '244106020.pp@students.poltek-kampar.ac.id',
      name: 'Nayra Tusakdiah Hermanto',
    },
    {
      email: '244106021.pp@students.poltek-kampar.ac.id',
      name: 'Nazwa Aqila Zahara',
    },
    {
      email: '244106022.pp@students.poltek-kampar.ac.id',
      name: 'Nurlia Rahma',
    },
    {
      email: '244106023.pp@students.poltek-kampar.ac.id',
      name: 'Prawira Dijaya',
    },
    {
      email: '244106024.pp@students.poltek-kampar.ac.id',
      name: 'Raju Alju Simare-Mare',
    },
    {
      email: '244106025.pp@students.poltek-kampar.ac.id',
      name: 'Regiya Pramesti Ayuni',
    },
    { email: '244106026.pp@students.poltek-kampar.ac.id', name: 'Rehmaida' },
    {
      email: '244106027.pp@students.poltek-kampar.ac.id',
      name: 'Revalia Karini',
    },
    {
      email: '244106028.pp@students.poltek-kampar.ac.id',
      name: 'Rizki Setiawan Sitompul',
    },
    { email: '244106029.pp@students.poltek-kampar.ac.id', name: 'Safitri' },
    {
      email: '244106030.pp@students.poltek-kampar.ac.id',
      name: 'Septina Kristianti Duho',
    },
    { email: '244107001.mab@students.poltek-kampar.ac.id', name: 'Agustinus' },
    {
      email: '244107002.mab@students.poltek-kampar.ac.id',
      name: 'Ahmad Guswandi',
    },
    {
      email: '244107003.mab@students.poltek-kampar.ac.id',
      name: 'Chindy Putri Maharani',
    },
    {
      email: '244107004.mab@students.poltek-kampar.ac.id',
      name: 'Dhabit Julianda Putra',
    },
    {
      email: '244107005.mab@students.poltek-kampar.ac.id',
      name: 'Dion Veydicova.S',
    },
    {
      email: '244107006.mab@students.poltek-kampar.ac.id',
      name: 'Irsa Sukmayati',
    },
    {
      email: '244107007.mab@students.poltek-kampar.ac.id',
      name: 'Laurakristiani Purba',
    },
    {
      email: '244107008.mab@students.poltek-kampar.ac.id',
      name: 'Lusi Apriliani',
    },
    {
      email: '244107010.mab@students.poltek-kampar.ac.id',
      name: 'Rahmat Fauzi',
    },
    {
      email: '244107011.mab@students.poltek-kampar.ac.id',
      name: 'Rizkon Fahlefi',
    },
    {
      email: '244107012.mab@students.poltek-kampar.ac.id',
      name: 'Sadam Husen',
    },
    {
      email: '244107013.mab@students.poltek-kampar.ac.id',
      name: 'Samuel Yonissa Sinaga',
    },
    {
      email: '244107014.mab@students.poltek-kampar.ac.id',
      name: 'Yusri Ifandi',
    },
    {
      email: '244108001.trl@students.poltek-kampar.ac.id',
      name: 'Ahmad Khusaini',
    },
    {
      email: '244108003.trl@students.poltek-kampar.ac.id',
      name: 'Brilleo Adyb Reznonde',
    },
    {
      email: '244108004.trl@students.poltek-kampar.ac.id',
      name: 'Mardiana Putri',
    },
    {
      email: '244108006.trl@students.poltek-kampar.ac.id',
      name: 'Sukma Pradipta',
    },
    {
      email: '244108007.trl@students.poltek-kampar.ac.id',
      name: 'Doli Apriansyah',
    },
    {
      email: '252105001.tpks@students.poltek-kampar.ac.id',
      name: 'Abdurrahman Haris',
    },
    {
      email: '252105002.tpks@students.poltek-kampar.ac.id',
      name: 'Aditya Yeheskiel Sihaloho',
    },
    {
      email: '252105003.tpks@students.poltek-kampar.ac.id',
      name: 'Adzra Faiza Amrita',
    },
    {
      email: '252105004.tpks@students.poltek-kampar.ac.id',
      name: 'Ameliya Syahyanisiregar',
    },
    {
      email: '252105005.tpks@students.poltek-kampar.ac.id',
      name: 'Ardi Affandi Harahap',
    },
    {
      email: '252105006.tpks@students.poltek-kampar.ac.id',
      name: 'Azca Laudiyah',
    },
    {
      email: '252105007.tpks@students.poltek-kampar.ac.id',
      name: 'Azkia Aulia Sapitri',
    },
    {
      email: '252105008.tpks@students.poltek-kampar.ac.id',
      name: 'Cinta Damayanti Samosir',
    },
    {
      email: '252105009.tpks@students.poltek-kampar.ac.id',
      name: 'Dani Abdul Rizki',
    },
    {
      email: '252105010.tpks@students.poltek-kampar.ac.id',
      name: 'Devi Ayu Lestari',
    },
    {
      email: '252105011.tpks@students.poltek-kampar.ac.id',
      name: 'Dona Ramadhani',
    },
    {
      email: '252105012.tpks@students.poltek-kampar.ac.id',
      name: 'Harianto Gultom',
    },
    {
      email: '252105013.tpks@students.poltek-kampar.ac.id',
      name: 'Indah Izian Hanani',
    },
    {
      email: '252105014.tpks@students.poltek-kampar.ac.id',
      name: 'Irjan Said',
    },
    {
      email: '252105015.tpks@students.poltek-kampar.ac.id',
      name: 'Izzat Fikriyah',
    },
    {
      email: '252105016.tpks@students.poltek-kampar.ac.id',
      name: 'Kanisius Halawa',
    },
    {
      email: '252105017.tpks@students.poltek-kampar.ac.id',
      name: 'Latifah Hanum',
    },
    {
      email: '252105018.tpks@students.poltek-kampar.ac.id',
      name: 'Marchel Orlando Sinaga',
    },
    {
      email: '252105019.tpks@students.poltek-kampar.ac.id',
      name: 'Monalisa Yosephine Sidauruk',
    },
    {
      email: '252105020.tpks@students.poltek-kampar.ac.id',
      name: 'Nadia Olivia Aftari',
    },
    {
      email: '252105021.tpks@students.poltek-kampar.ac.id',
      name: 'Naya Adduha Vazlia Sirait',
    },
    {
      email: '252105022.tpks@students.poltek-kampar.ac.id',
      name: 'Nibenia Zega',
    },
    {
      email: '252105023.tpks@students.poltek-kampar.ac.id',
      name: 'Pelangi Astari',
    },
    {
      email: '252105024.tpks@students.poltek-kampar.ac.id',
      name: 'Reta Agustin Pratiwi',
    },
    {
      email: '252105025.tpks@students.poltek-kampar.ac.id',
      name: 'Rika Zubaidah',
    },
    {
      email: '252105026.tpks@students.poltek-kampar.ac.id',
      name: 'Selma Refitrah',
    },
    {
      email: '252105027.tpks@students.poltek-kampar.ac.id',
      name: 'Suci Rahmadani',
    },
    {
      email: '252105028.tpks@students.poltek-kampar.ac.id',
      name: 'Tri Murthi Nazlah Shali',
    },
    {
      email: '252105029.tpks@students.poltek-kampar.ac.id',
      name: 'Vensca Cahya Heppysta Anggara',
    },
    {
      email: '252105030.tpks@students.poltek-kampar.ac.id',
      name: 'Zahwa Mecca Adira',
    },
    {
      email: '253101001.tps@students.poltek-kampar.ac.id',
      name: 'Aji Bramantara Sundawa',
    },
    {
      email: '253101002.tps@students.poltek-kampar.ac.id',
      name: 'Husna Aulia',
    },
    {
      email: '253101003.tps@students.poltek-kampar.ac.id',
      name: 'M. Afdillah',
    },
    {
      email: '253101004.tps@students.poltek-kampar.ac.id',
      name: 'M. Teuku Rafli',
    },
    {
      email: '253101005.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Alfariyan',
    },
    {
      email: '253101006.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Latief Effendi',
    },
    {
      email: '253101007.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Rajabal Aditya',
    },
    { email: '253101008.tps@students.poltek-kampar.ac.id', name: 'Nuraziza' },
    {
      email: '253101009.tps@students.poltek-kampar.ac.id',
      name: 'Oscar Said Maulana',
    },
    {
      email: '253101010.tps@students.poltek-kampar.ac.id',
      name: 'Agung Permana ',
    },
    {
      email: '253101011.tps@students.poltek-kampar.ac.id',
      name: 'Bayu Adma Yuda ',
    },
    {
      email: '253101012.tps@students.poltek-kampar.ac.id',
      name: 'Faralinda Wimar Hidayah',
    },
    {
      email: '253101013.tps@students.poltek-kampar.ac.id',
      name: 'Febby Alya Sovani ',
    },
    {
      email: '253101014.tps@students.poltek-kampar.ac.id',
      name: 'Hadi Duta Maulana',
    },
    {
      email: '253101015.tps@students.poltek-kampar.ac.id',
      name: 'Jefri Sanjaya Nasution',
    },
    { email: '253101016.tps@students.poltek-kampar.ac.id', name: 'Laya Fitra' },
    {
      email: '253101017.tps@students.poltek-kampar.ac.id',
      name: 'M. Ronel Alfa Zidan',
    },
    {
      email: '253101018.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Arif',
    },
    {
      email: '253101019.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Iqbal Azizi ',
    },
    {
      email: '253101020.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Saefullah',
    },
    {
      email: '253101021.tps@students.poltek-kampar.ac.id',
      name: 'Rheno Arfeno Putra',
    },
    {
      email: '253101022.tps@students.poltek-kampar.ac.id',
      name: 'Yitro Elanzar Pasaribu ',
    },
    {
      email: '253101023.tps@students.poltek-kampar.ac.id',
      name: 'Aditya Bintang Kesuma',
    },
    {
      email: '253101024.tps@students.poltek-kampar.ac.id',
      name: 'Adop Namora Harahap',
    },
    {
      email: '253101025.tps@students.poltek-kampar.ac.id',
      name: 'Ainur Rofiq',
    },
    {
      email: '253101026.tps@students.poltek-kampar.ac.id',
      name: 'Andreas Tongam Simbolon',
    },
    {
      email: '253101027.tps@students.poltek-kampar.ac.id',
      name: 'Aurel Alfarina',
    },
    {
      email: '253101028.tps@students.poltek-kampar.ac.id',
      name: 'Edwin Habiby',
    },
    {
      email: '253101029.tps@students.poltek-kampar.ac.id',
      name: 'Faridh Rahman Hakim',
    },
    {
      email: '253101030.tps@students.poltek-kampar.ac.id',
      name: 'Jenni Amelia Novita Sari',
    },
    {
      email: '253101031.tps@students.poltek-kampar.ac.id',
      name: 'Juni Margareth Sinurat',
    },
    {
      email: '253101032.tps@students.poltek-kampar.ac.id',
      name: 'Kevin Dimas Tubagus Sirait',
    },
    {
      email: '253101033.tps@students.poltek-kampar.ac.id',
      name: 'Lydia Lestari Pasaribu',
    },
    {
      email: '253101034.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Ardi',
    },
    {
      email: '253101035.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Erdeniansyah',
    },
    {
      email: '253101036.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Irsyaad',
    },
    {
      email: '253101037.tps@students.poltek-kampar.ac.id',
      name: 'Nabil Pramana',
    },
    {
      email: '253101038.tps@students.poltek-kampar.ac.id',
      name: 'Nanda Afriani',
    },
    {
      email: '253101039.tps@students.poltek-kampar.ac.id',
      name: 'Naufal Al Ghifari',
    },
    {
      email: '253101040.tps@students.poltek-kampar.ac.id',
      name: 'Navira Rahayu',
    },
    {
      email: '253101041.tps@students.poltek-kampar.ac.id',
      name: 'Nurul Nadiah Siregar',
    },
    {
      email: '253101042.tps@students.poltek-kampar.ac.id',
      name: 'Pandu Rahmadhani',
    },
    {
      email: '253101043.tps@students.poltek-kampar.ac.id',
      name: 'Radif Alhady Ramadhan',
    },
    {
      email: '253101044.tps@students.poltek-kampar.ac.id',
      name: 'Reymandha Rafli Pratama',
    },
    {
      email: '253101045.tps@students.poltek-kampar.ac.id',
      name: 'Ria Cahyani',
    },
    {
      email: '253101046.tps@students.poltek-kampar.ac.id',
      name: 'Riski Marbun',
    },
    {
      email: '253101047.tps@students.poltek-kampar.ac.id',
      name: 'Rista Melani',
    },
    {
      email: '253101048.tps@students.poltek-kampar.ac.id',
      name: 'Rosa Ayu Ramadi',
    },
    { email: '253101049.tps@students.poltek-kampar.ac.id', name: 'Rosmanita' },
    {
      email: '253101050.tps@students.poltek-kampar.ac.id',
      name: 'Sindi Afriani',
    },
    {
      email: '253101051.tps@students.poltek-kampar.ac.id',
      name: 'Siti Fatimah',
    },
    {
      email: '253101052.tps@students.poltek-kampar.ac.id',
      name: 'Sunny Yuliana Margaret Sinaga',
    },
    {
      email: '253101053.tps@students.poltek-kampar.ac.id',
      name: 'Aditya Laksamana',
    },
    {
      email: '253101054.tps@students.poltek-kampar.ac.id',
      name: 'Afdinal Saputra',
    },
    {
      email: '253101055.tps@students.poltek-kampar.ac.id',
      name: 'Alvin Putra Aprialdi',
    },
    {
      email: '253101056.tps@students.poltek-kampar.ac.id',
      name: 'Dida Rizky Pratama',
    },
    {
      email: '253101057.tps@students.poltek-kampar.ac.id',
      name: 'Farel Aldi Priansyah',
    },
    {
      email: '253101058.tps@students.poltek-kampar.ac.id',
      name: 'Febri Samuel Simanjuntak',
    },
    {
      email: '253101059.tps@students.poltek-kampar.ac.id',
      name: 'Indah Pebriana',
    },
    {
      email: '253101060.tps@students.poltek-kampar.ac.id',
      name: 'Jesica Debora Simanjuntak',
    },
    {
      email: '253101061.tps@students.poltek-kampar.ac.id',
      name: 'Kuntum Kairuni',
    },
    {
      email: '253101062.tps@students.poltek-kampar.ac.id',
      name: 'Meila Musyafira',
    },
    {
      email: '253101063.tps@students.poltek-kampar.ac.id',
      name: 'Melianus Batee',
    },
    {
      email: '253101064.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Badhilla Iqbal',
    },
    {
      email: '253101065.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Ibra',
    },
    {
      email: '253101066.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Khuzni Fadil',
    },
    {
      email: '253101067.tps@students.poltek-kampar.ac.id',
      name: 'Nanda Ardian',
    },
    {
      email: '253101068.tps@students.poltek-kampar.ac.id',
      name: 'Natasa Putri Kasri',
    },
    {
      email: '253101069.tps@students.poltek-kampar.ac.id',
      name: 'Nessa Rahma Sailana',
    },
    {
      email: '253101070.tps@students.poltek-kampar.ac.id',
      name: 'Oka Purwansah',
    },
    {
      email: '253101071.tps@students.poltek-kampar.ac.id',
      name: 'Putra Bangun Lumban Raja',
    },
    {
      email: '253101072.tps@students.poltek-kampar.ac.id',
      name: 'Raikhan Akbar',
    },
    {
      email: '253101073.tps@students.poltek-kampar.ac.id',
      name: 'Ramadani Azela',
    },
    {
      email: '253101074.tps@students.poltek-kampar.ac.id',
      name: 'Rido Maraukum Hasibuan',
    },
    {
      email: '253101075.tps@students.poltek-kampar.ac.id',
      name: 'Risma Manurung',
    },
    {
      email: '253101076.tps@students.poltek-kampar.ac.id',
      name: 'Risya Nurfadilla Siregar',
    },
    {
      email: '253101077.tps@students.poltek-kampar.ac.id',
      name: 'Rosliana Siregar',
    },
    {
      email: '253101078.tps@students.poltek-kampar.ac.id',
      name: 'Silvia Nur Asyani',
    },
    {
      email: '253101079.tps@students.poltek-kampar.ac.id',
      name: 'Siti Badriah',
    },
    {
      email: '253101080.tps@students.poltek-kampar.ac.id',
      name: 'Siti Marfuah',
    },
    {
      email: '253101081.tps@students.poltek-kampar.ac.id',
      name: 'Vika Kris Aulia Zega',
    },
    {
      email: '253101082.tps@students.poltek-kampar.ac.id',
      name: 'Vina Aprilia',
    },
    {
      email: '253102001.ppm@students.poltek-kampar.ac.id',
      name: 'Haikal Maqbullah',
    },
    {
      email: '253102002.ppm@students.poltek-kampar.ac.id',
      name: 'Johanes Siburian',
    },
    {
      email: '253102003.ppm@students.poltek-kampar.ac.id',
      name: 'Kelvin Novriansyah',
    },
    {
      email: '253102004.ppm@students.poltek-kampar.ac.id',
      name: 'M. Abdul Halim',
    },
    { email: '253102005.ppm@students.poltek-kampar.ac.id', name: 'M. Rakes' },
    {
      email: '253102006.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Islam Darmawan',
    },
    {
      email: '253102007.ppm@students.poltek-kampar.ac.id',
      name: 'Rahmad Ramadhan',
    },
    {
      email: '253102008.ppm@students.poltek-kampar.ac.id',
      name: 'Raji Aufa Azzam',
    },
    {
      email: '253102009.ppm@students.poltek-kampar.ac.id',
      name: 'Afif Firmansyah',
    },
    {
      email: '253102010.ppm@students.poltek-kampar.ac.id',
      name: 'M. Iqbal Andika Bahrein',
    },
    {
      email: '253102011.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Daffa Ramadhan ',
    },
    {
      email: '253102012.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Rendy ',
    },
    {
      email: '253102013.ppm@students.poltek-kampar.ac.id',
      name: 'Abdul Sidik Fabian',
    },
    {
      email: '253102014.ppm@students.poltek-kampar.ac.id',
      name: 'Agus Indomer Harahap',
    },
    { email: '253102015.ppm@students.poltek-kampar.ac.id', name: 'Ainun Nafi' },
    {
      email: '253102016.ppm@students.poltek-kampar.ac.id',
      name: 'Akbar Khalifa Lubis',
    },
    {
      email: '253102017.ppm@students.poltek-kampar.ac.id',
      name: 'Angga Tri Prayoga',
    },
    {
      email: '253102018.ppm@students.poltek-kampar.ac.id',
      name: 'Antoni Januar Silalahi',
    },
    {
      email: '253102019.ppm@students.poltek-kampar.ac.id',
      name: 'Azryanto Abdullah',
    },
    {
      email: '253102020.ppm@students.poltek-kampar.ac.id',
      name: 'Bayu Pratama',
    },
    {
      email: '253102021.ppm@students.poltek-kampar.ac.id',
      name: 'Brian Saputra Bitto',
    },
    {
      email: '253102022.ppm@students.poltek-kampar.ac.id',
      name: 'Deng Gan Raya Batubara',
    },
    {
      email: '253102023.ppm@students.poltek-kampar.ac.id',
      name: 'Dennis Hermansyah',
    },
    {
      email: '253102024.ppm@students.poltek-kampar.ac.id',
      name: 'Dimas Hirmawan',
    },
    {
      email: '253102025.ppm@students.poltek-kampar.ac.id',
      name: 'Evenjo Demarcel Siregar',
    },
    {
      email: '253102026.ppm@students.poltek-kampar.ac.id',
      name: 'Frisna Dhiva Ardanfi',
    },
    {
      email: '253102027.ppm@students.poltek-kampar.ac.id',
      name: 'Gessa Legaspi',
    },
    {
      email: '253102028.ppm@students.poltek-kampar.ac.id',
      name: 'Girdo Ramadhan Rambe',
    },
    {
      email: '253102029.ppm@students.poltek-kampar.ac.id',
      name: 'Hafiz Abdillah Harahap',
    },
    {
      email: '253102030.ppm@students.poltek-kampar.ac.id',
      name: 'Jovin Sahputra Ketaren',
    },
    {
      email: '253102031.ppm@students.poltek-kampar.ac.id',
      name: 'Mhd Daniel Afsah',
    },
    {
      email: '253102032.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Al Fajri',
    },
    {
      email: '253102033.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Fatihul',
    },
    {
      email: '253102034.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Rafli Harahap',
    },
    {
      email: '253102035.ppm@students.poltek-kampar.ac.id',
      name: 'Novan Eka Saputra',
    },
    { email: '253102036.ppm@students.poltek-kampar.ac.id', name: 'Rafly Sya' },
    {
      email: '253102037.ppm@students.poltek-kampar.ac.id',
      name: 'Rediansyah ',
    },
    {
      email: '253102038.ppm@students.poltek-kampar.ac.id',
      name: 'Reza Alghifari Can',
    },
    {
      email: '253102039.ppm@students.poltek-kampar.ac.id',
      name: 'Ridho Leviance',
    },
    {
      email: '253102040.ppm@students.poltek-kampar.ac.id',
      name: 'Rivael Saragih',
    },
    { email: '253102041.ppm@students.poltek-kampar.ac.id', name: 'Sa' },
    { email: '253102042.ppm@students.poltek-kampar.ac.id', name: 'Umar Faruq' },
    {
      email: '253102043.ppm@students.poltek-kampar.ac.id',
      name: 'Adrian Pratama',
    },
    { email: '253102044.ppm@students.poltek-kampar.ac.id', name: 'Ahmad Suja' },
    {
      email: '253102045.ppm@students.poltek-kampar.ac.id',
      name: 'Andre Maulana Purba',
    },
    {
      email: '253102046.ppm@students.poltek-kampar.ac.id',
      name: 'Anton Purba',
    },
    {
      email: '253102047.ppm@students.poltek-kampar.ac.id',
      name: 'Arif Kurniawan',
    },
    {
      email: '253102048.ppm@students.poltek-kampar.ac.id',
      name: 'Barelian Librado Simarmata',
    },
    {
      email: '253102049.ppm@students.poltek-kampar.ac.id',
      name: 'Benny Hizkia Sihite',
    },
    {
      email: '253102050.ppm@students.poltek-kampar.ac.id',
      name: 'Dafa Rosikh Ardani',
    },
    {
      email: '253102051.ppm@students.poltek-kampar.ac.id',
      name: 'Debora Junyar',
    },
    {
      email: '253102052.ppm@students.poltek-kampar.ac.id',
      name: 'Deo Akbar Hariri',
    },
    {
      email: '253102053.ppm@students.poltek-kampar.ac.id',
      name: 'Dimas Sukma Wijaya',
    },
    {
      email: '253102054.ppm@students.poltek-kampar.ac.id',
      name: 'Febrian Pranata',
    },
    {
      email: '253102055.ppm@students.poltek-kampar.ac.id',
      name: 'Feny Annisa Amini',
    },
    {
      email: '253102056.ppm@students.poltek-kampar.ac.id',
      name: 'Galang Ryandhika Ramadhani Hutabarat',
    },
    {
      email: '253102057.ppm@students.poltek-kampar.ac.id',
      name: 'Hadi Kusuma Atmaja',
    },
    { email: '253102058.ppm@students.poltek-kampar.ac.id', name: 'Irfansah' },
    {
      email: '253102059.ppm@students.poltek-kampar.ac.id',
      name: 'M.Rifki Syahputra',
    },
    {
      email: '253102060.ppm@students.poltek-kampar.ac.id',
      name: 'Mohan Pahri Ritonga',
    },
    {
      email: '253102061.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Fadli Frajastin',
    },
    {
      email: '253102062.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Iqbal Anhaar',
    },
    { email: '253102063.ppm@students.poltek-kampar.ac.id', name: 'Neo Suhaji' },
    {
      email: '253102064.ppm@students.poltek-kampar.ac.id',
      name: 'Radja Cahaya Prestasi',
    },
    {
      email: '253102065.ppm@students.poltek-kampar.ac.id',
      name: 'Ray Aldi Sepredo. S',
    },
    {
      email: '253102066.ppm@students.poltek-kampar.ac.id',
      name: 'Refin Ananta Sinulingga',
    },
    {
      email: '253102067.ppm@students.poltek-kampar.ac.id',
      name: 'Rezky Ramadhan',
    },
    {
      email: '253102068.ppm@students.poltek-kampar.ac.id',
      name: 'Rifki Algiardin',
    },
    {
      email: '253102069.ppm@students.poltek-kampar.ac.id',
      name: 'Rizkye Rhamadani',
    },
    {
      email: '253102070.ppm@students.poltek-kampar.ac.id',
      name: 'Siti Rahma Andini',
    },
    {
      email: '253102071.ppm@students.poltek-kampar.ac.id',
      name: 'Tegar Danang Prayoga',
    },
    {
      email: '253102072.ppm@students.poltek-kampar.ac.id',
      name: 'William Okta Boni Brahmana',
    },
    {
      email: '253103001.tif@students.poltek-kampar.ac.id',
      name: 'Afran Alfarez',
    },
    {
      email: '253103002.tif@students.poltek-kampar.ac.id',
      name: 'Anggela Safrina',
    },
    {
      email: '253103003.tif@students.poltek-kampar.ac.id',
      name: 'Badrid Dujaa',
    },
    {
      email: '253103004.tif@students.poltek-kampar.ac.id',
      name: 'Deden Maulana',
    },
    {
      email: '253103005.tif@students.poltek-kampar.ac.id',
      name: 'Nabilla Suha Faizah',
    },
    {
      email: '253103006.tif@students.poltek-kampar.ac.id',
      name: 'Nurul Husna',
    },
    {
      email: '253103007.tif@students.poltek-kampar.ac.id',
      name: 'Wantrisno Waruwu',
    },
    {
      email: '253103008.tif@students.poltek-kampar.ac.id',
      name: 'Zafitra Pratama Ramadhan',
    },
    {
      email: '253103009.tif@students.poltek-kampar.ac.id',
      name: 'Hana Afifah Syarafina ',
    },
    {
      email: '253103010.tif@students.poltek-kampar.ac.id',
      name: 'Ahmad Hanif Mustofa',
    },
    {
      email: '253103011.tif@students.poltek-kampar.ac.id',
      name: 'Alyana Choirun Nisa',
    },
    {
      email: '253103012.tif@students.poltek-kampar.ac.id',
      name: 'Anggi Juliyoni',
    },
    {
      email: '253103013.tif@students.poltek-kampar.ac.id',
      name: 'Chelsa Pristian',
    },
    {
      email: '253103014.tif@students.poltek-kampar.ac.id',
      name: 'Dwi Arya Wibowo',
    },
    { email: '253103015.tif@students.poltek-kampar.ac.id', name: 'Fadli' },
    {
      email: '253103016.tif@students.poltek-kampar.ac.id',
      name: 'Ghiffary Azhar',
    },
    {
      email: '253103017.tif@students.poltek-kampar.ac.id',
      name: 'Hanihasya Irana',
    },
    {
      email: '253103018.tif@students.poltek-kampar.ac.id',
      name: 'Ikhtiar Ali Imron',
    },
    {
      email: '253103019.tif@students.poltek-kampar.ac.id',
      name: 'Ira Fadila Nurdiah',
    },
    {
      email: '253103020.tif@students.poltek-kampar.ac.id',
      name: 'Jon Criscahyanta Saragih',
    },
    {
      email: '253103021.tif@students.poltek-kampar.ac.id',
      name: 'Maudy Febrina',
    },
    {
      email: '253103022.tif@students.poltek-kampar.ac.id',
      name: 'Mayla Fayza Salsabilla',
    },
    {
      email: '253103023.tif@students.poltek-kampar.ac.id',
      name: 'Muhammad Daffa Alhaqi',
    },
    {
      email: '253103024.tif@students.poltek-kampar.ac.id',
      name: 'Muhammad Dani Harahap',
    },
    {
      email: '253103025.tif@students.poltek-kampar.ac.id',
      name: 'Naila Nur Azizah',
    },
    {
      email: '253103026.tif@students.poltek-kampar.ac.id',
      name: 'Nayla Sahira',
    },
    { email: '253103027.tif@students.poltek-kampar.ac.id', name: 'Nuraini' },
    {
      email: '253103028.tif@students.poltek-kampar.ac.id',
      name: 'Putri Adinda Sinaga',
    },
    {
      email: '253103029.tif@students.poltek-kampar.ac.id',
      name: 'Reni Wulandari',
    },
    {
      email: '253103030.tif@students.poltek-kampar.ac.id',
      name: 'Reva Pramudya Saputri',
    },
    {
      email: '253103031.tif@students.poltek-kampar.ac.id',
      name: 'Reza Rizki Crintian Sitompul',
    },
    {
      email: '253103032.tif@students.poltek-kampar.ac.id',
      name: 'Riansyah Hutagaol',
    },
    {
      email: '253103033.tif@students.poltek-kampar.ac.id',
      name: 'Sellyna Wardania',
    },
    {
      email: '253103034.tif@students.poltek-kampar.ac.id',
      name: 'Sopia Indah Sintianawati',
    },
    { email: '253103035.tif@students.poltek-kampar.ac.id', name: 'Sulistyani' },
    {
      email: '253103036.tif@students.poltek-kampar.ac.id',
      name: 'Teguh Prayoga',
    },
    {
      email: '253103037.tif@students.poltek-kampar.ac.id',
      name: 'Yuda Eka Prasetiyo',
    },
    { email: '253103038.tif@students.poltek-kampar.ac.id', name: 'Zaharatun' },
    {
      email: '253103039.tif@students.poltek-kampar.ac.id',
      name: 'Zakaria Zain Zibran',
    },
    {
      email: '253201083.tps@students.poltek-kampar.ac.id',
      name: 'Agus Riawan',
    },
    {
      email: '253201084.tps@students.poltek-kampar.ac.id',
      name: 'Alfiano Raihan Ardiansyah',
    },
    {
      email: '253201085.tps@students.poltek-kampar.ac.id',
      name: 'Ananda Putri Aryani',
    },
    {
      email: '253201086.tps@students.poltek-kampar.ac.id',
      name: 'Andi Asmarah',
    },
    {
      email: '253201087.tps@students.poltek-kampar.ac.id',
      name: 'Aulia Ramadina',
    },
    {
      email: '253201088.tps@students.poltek-kampar.ac.id',
      name: 'Dicky Wijaya Purba',
    },
    {
      email: '253201089.tps@students.poltek-kampar.ac.id',
      name: 'Dwi Rahma Sari',
    },
    {
      email: '253201090.tps@students.poltek-kampar.ac.id',
      name: 'Iqbal Debriansyah',
    },
    {
      email: '253201091.tps@students.poltek-kampar.ac.id',
      name: 'Ismed Abdullah Rambe',
    },
    {
      email: '253201092.tps@students.poltek-kampar.ac.id',
      name: 'Japuhunan Siregar',
    },
    {
      email: '253201093.tps@students.poltek-kampar.ac.id',
      name: 'Mhd. Rizqi Aditya Rangkuti',
    },
    {
      email: '253201094.tps@students.poltek-kampar.ac.id',
      name: 'Putri Ananda',
    },
    {
      email: '253201095.tps@students.poltek-kampar.ac.id',
      name: 'Vicky Maharani',
    },
    {
      email: '254104001.abi@students.poltek-kampar.ac.id',
      name: 'Abdi Naufal  Habibullah',
    },
    {
      email: '254104002.abi@students.poltek-kampar.ac.id',
      name: 'Kristian Aritonang ',
    },
    {
      email: '254104003.abi@students.poltek-kampar.ac.id',
      name: 'Nafil Rezkilah',
    },
    {
      email: '254104004.abi@students.poltek-kampar.ac.id',
      name: 'Senja Oktarina',
    },
    {
      email: '254104005.abi@students.poltek-kampar.ac.id',
      name: 'Gilang Kurniawan',
    },
    {
      email: '254106001.pp@students.poltek-kampar.ac.id',
      name: 'Daniel Valentino Pakpahan',
    },
    {
      email: '254106002.pp@students.poltek-kampar.ac.id',
      name: 'Desta Alferdian',
    },
    {
      email: '254106003.pp@students.poltek-kampar.ac.id',
      name: 'Fahri Pratama Andreansyah',
    },
    {
      email: '254106004.pp@students.poltek-kampar.ac.id',
      name: 'Ferdi Frasetio ',
    },
    {
      email: '254106005.pp@students.poltek-kampar.ac.id',
      name: 'Joko Tri Moro',
    },
    {
      email: '254106006.pp@students.poltek-kampar.ac.id',
      name: 'M. Ibrahim. P',
    },
    {
      email: '254106007.pp@students.poltek-kampar.ac.id',
      name: 'Mahmudi Al Ghifari',
    },
    {
      email: '254106008.pp@students.poltek-kampar.ac.id',
      name: 'Muhammad Yusuf Darusalam',
    },
    {
      email: '254106009.pp@students.poltek-kampar.ac.id',
      name: 'Afnika Joariah G',
    },
    {
      email: '254106010.pp@students.poltek-kampar.ac.id',
      name: 'Anisa Dwi Rahayu',
    },
    {
      email: '254106011.pp@students.poltek-kampar.ac.id',
      name: 'Astri Indriani Pertiwi',
    },
    {
      email: '254106012.pp@students.poltek-kampar.ac.id',
      name: 'Dila Angriyani',
    },
    {
      email: '254106013.pp@students.poltek-kampar.ac.id',
      name: 'Eldin Ari Ananda',
    },
    {
      email: '254106014.pp@students.poltek-kampar.ac.id',
      name: 'Fitry Ramadhany',
    },
    { email: '254106015.pp@students.poltek-kampar.ac.id', name: 'Ibnu Hajar' },
    {
      email: '254106016.pp@students.poltek-kampar.ac.id',
      name: 'Iin Ofiyanti',
    },
    { email: '254106017.pp@students.poltek-kampar.ac.id', name: 'Jatiasmara' },
    { email: '254106018.pp@students.poltek-kampar.ac.id', name: 'M. Prayoga' },
    {
      email: '254106019.pp@students.poltek-kampar.ac.id',
      name: 'M. Tio Ananda',
    },
    {
      email: '254106020.pp@students.poltek-kampar.ac.id',
      name: 'Manuel Sihotang',
    },
    {
      email: '254106021.pp@students.poltek-kampar.ac.id',
      name: 'Markus Nobel Saputra Sianturi',
    },
    {
      email: '254106022.pp@students.poltek-kampar.ac.id',
      name: 'Miranti Larasani',
    },
    {
      email: '254106023.pp@students.poltek-kampar.ac.id',
      name: 'Mirna Syahira',
    },
    {
      email: '254106024.pp@students.poltek-kampar.ac.id',
      name: 'Muhammad Khairul Anwar',
    },
    {
      email: '254106025.pp@students.poltek-kampar.ac.id',
      name: 'Nor Muharomah',
    },
    {
      email: '254106026.pp@students.poltek-kampar.ac.id',
      name: 'Nuriah Deswita Harianja',
    },
    { email: '254106027.pp@students.poltek-kampar.ac.id', name: 'Nurpadilah' },
    {
      email: '254106028.pp@students.poltek-kampar.ac.id',
      name: 'Ribka Hana Tasia Barasa',
    },
    { email: '254106029.pp@students.poltek-kampar.ac.id', name: 'Riko Verga' },
    {
      email: '254106030.pp@students.poltek-kampar.ac.id',
      name: 'Rizki Ardiansyah',
    },
    {
      email: '254106031.pp@students.poltek-kampar.ac.id',
      name: 'Sadilla Aini',
    },
    {
      email: '254106032.pp@students.poltek-kampar.ac.id',
      name: 'Samuel Siregar',
    },
    {
      email: '254106033.pp@students.poltek-kampar.ac.id',
      name: 'Siti Nurhafizah',
    },
    {
      email: '254106034.pp@students.poltek-kampar.ac.id',
      name: 'Sri Wahyu Ningsih',
    },
    {
      email: '254106035.pp@students.poltek-kampar.ac.id',
      name: 'Sultan Hasanul Bulqiah',
    },
    {
      email: '254106036.pp@students.poltek-kampar.ac.id',
      name: 'Surya Dandi Saputra',
    },
    {
      email: '254106037.pp@students.poltek-kampar.ac.id',
      name: 'Zahra Andini',
    },
    {
      email: '254106038.pp@students.poltek-kampar.ac.id',
      name: 'Zelfy Apriliani Putri',
    },
    {
      email: '254107001.mab@students.poltek-kampar.ac.id',
      name: 'Afif Dzulhilmi ',
    },
    {
      email: '254107002.mab@students.poltek-kampar.ac.id',
      name: 'Elviona Juiska Amalia',
    },
    {
      email: '254107003.mab@students.poltek-kampar.ac.id',
      name: 'Lois Avareza Simanjorang',
    },
    {
      email: '254107004.mab@students.poltek-kampar.ac.id',
      name: 'Uni Tri Amelia Malau',
    },
    {
      email: '254107005.mab@students.poltek-kampar.ac.id',
      name: 'Zesmi Navela',
    },
    {
      email: '254108001.trl@students.poltek-kampar.ac.id',
      name: 'Ahmad Syihan Baihaqi ',
    },
    {
      email: '254108002.trl@students.poltek-kampar.ac.id',
      name: 'Muhammad Rafif',
    },
    {
      email: '254108003.trl@students.poltek-kampar.ac.id',
      name: 'Anggelia Ana Keysa',
    },
    {
      email: '254108004.trl@students.poltek-kampar.ac.id',
      name: 'Azka Vania Ulya',
    },
    {
      email: '254108005.trl@students.poltek-kampar.ac.id',
      name: 'Azzira Qinanti',
    },
    {
      email: '254108006.trl@students.poltek-kampar.ac.id',
      name: 'Daniyah Nafisah Saragih',
    },
    {
      email: '254108007.trl@students.poltek-kampar.ac.id',
      name: 'Destri Manda Farza',
    },
    {
      email: '254108008.trl@students.poltek-kampar.ac.id',
      name: 'Devan Pashada Gultom',
    },
    {
      email: '254108009.trl@students.poltek-kampar.ac.id',
      name: 'Donna Anatasya Panjaitan',
    },
    {
      email: '254108010.trl@students.poltek-kampar.ac.id',
      name: 'Fadilla Shafira',
    },
    {
      email: '254108011.trl@students.poltek-kampar.ac.id',
      name: 'Hafiz Alyanda Azhar',
    },
    {
      email: '254108012.trl@students.poltek-kampar.ac.id',
      name: 'Ilham Yurdani',
    },
    {
      email: '254108013.trl@students.poltek-kampar.ac.id',
      name: 'Like Indiarti Surono',
    },
    {
      email: '254108014.trl@students.poltek-kampar.ac.id',
      name: 'Maulana Sofian Syah',
    },
    {
      email: '254108015.trl@students.poltek-kampar.ac.id',
      name: 'Mhd Habil Chaniago',
    },
    {
      email: '254108016.trl@students.poltek-kampar.ac.id',
      name: 'Muhammad Fauzan Azima',
    },
    {
      email: '254108017.trl@students.poltek-kampar.ac.id',
      name: 'Muhammad Ilham',
    },
    {
      email: '254108018.trl@students.poltek-kampar.ac.id',
      name: 'Muhammad Ridho',
    },
    {
      email: '254108019.trl@students.poltek-kampar.ac.id',
      name: 'Muhammad Ryan Radid',
    },
    {
      email: '254108020.trl@students.poltek-kampar.ac.id',
      name: 'Nana Triana',
    },
    {
      email: '254108021.trl@students.poltek-kampar.ac.id',
      name: 'Naziha Zahra Ayu',
    },
    {
      email: '254108022.trl@students.poltek-kampar.ac.id',
      name: 'Nurgaya Dwiyanti',
    },
    {
      email: '254108023.trl@students.poltek-kampar.ac.id',
      name: 'Oktavia Eka Syahputri',
    },
    {
      email: '254108024.trl@students.poltek-kampar.ac.id',
      name: 'Putri Salsabila',
    },
    {
      email: '254108025.trl@students.poltek-kampar.ac.id',
      name: 'Rahmalia Putriana',
    },
    {
      email: '254108026.trl@students.poltek-kampar.ac.id',
      name: 'Ranika Ramadani R',
    },
    {
      email: '254108027.trl@students.poltek-kampar.ac.id',
      name: 'Rivia Valina',
    },
    {
      email: '254108028.trl@students.poltek-kampar.ac.id',
      name: 'Siti Nurhidayah',
    },
    {
      email: '254108029.trl@students.poltek-kampar.ac.id',
      name: 'Susan Nabila',
    },
    {
      email: '254108030.trl@students.poltek-kampar.ac.id',
      name: 'Valentina Gurning',
    },
    {
      email: '254108031.trl@students.poltek-kampar.ac.id',
      name: 'Vio Bintang Meisha Putra',
    },
    {
      email: '254108032.trl@students.poltek-kampar.ac.id',
      name: 'Yudha Tri Pangestu',
    },
    { email: '254204006.abi@students.poltek-kampar.ac.id', name: 'Husein' },
    {
      email: '3101001.tps@students.poltek-kampar.ac.id',
      name: 'Aji Bramantara Sundawa',
    },
    {
      email: 'a.taufiqilfadhilah2021.tps@students.poltek-kampar.ac.id',
      name: 'A. Taufiqil Fadhilah',
    },
    { email: 'abdiramzah.ppm@poltek-kampar.ac.id', name: 'Abdi Ramzah' },
    { email: 'abdul2019.ppm@poltek-kampar.ac.id', name: 'Abdul Roji Hasibuan' },
    {
      email: 'abdulahbambang2021.tif@students.poltek-kampar.ac.id',
      name: 'Abdulah Bambang',
    },
    {
      email: 'abdullahSafiih@poltek-kampar.ac.id',
      name: 'Abdullah Safiih Harianja',
    },
    { email: 'AbelLiana@poltek-kampar.ac.id', name: 'Abel Liana' },
    {
      email: 'abizarramadhani2021.tps@students.poltek-kampar.ac.id',
      name: 'Abizar Ramadhani',
    },
    { email: 'ade@poltek-kampar.ac.id', name: 'Ade Kurniawan, S.Kom.' },
    { email: 'adela2019.tif@poltek-kampar.ac.id', name: 'Adela Maharani' },
    {
      email: 'adesyefirarizky2021.tif@students.poltek-kampar.ac.id',
      name: 'Ade Syefira Rizky',
    },
    {
      email: 'adi.febrianton@poltek-kampar.ac.id',
      name: 'Adi Febrianton, S.T., M.T.',
    },
    {
      email: 'adil2022.tpks@students.poltek-kampar.ac.id',
      name: 'Adil Dinata',
    },
    { email: 'adiputra@poltek-kampar.ac.id', name: 'Adi Putra' },
    {
      email: 'adiridlhataufiq2021.tps@students.poltek-kampar.ac.id',
      name: 'Adi Ridlha Taufiq Hidayat N.E.E',
    },
    {
      email: 'aditya2019.ppm@poltek-kampar.ac.id',
      name: 'Aditya Feri Ramadan',
    },
    { email: 'aditya@poltek-kampar.ac.id', name: 'Aditya Kurniawan Ketaren' },
    {
      email: 'adiwal2022.ppm@students.poltek-kampar.ac.id',
      name: 'Adiwal Putra',
    },
    { email: 'AfdalRizki@poltek-kampar.ac.id', name: 'Afdal Rizki' },
    { email: 'afdhal@poltek-kampar.ac.id', name: 'Afdhal, S.TP, M.Si' },
    {
      email: 'afif2022.tps@students.poltek-kampar.ac.id',
      name: 'Afif Rohmatullah',
    },
    {
      email: 'afrizallinardi2021.tps@students.poltek-kampar.ac.id',
      name: 'Afrizal Linardi',
    },
    { email: 'agungarif@poltek-kampar.ac.id', name: 'Agung Arif Zulfikar ' },
    {
      email: 'agungpramono@poltek-kampar.ac.id',
      name: 'Agung Pramono, SP., M.MA',
    },
    {
      email: 'agustin2022.tif@students.poltek-kampar.ac.id',
      name: 'Ilma Widya Agustin',
    },
    { email: 'agustina@poltek-kampar.ac.id', name: 'Agustina Hasibuan' },
    { email: 'ahmad2019.ppm@poltek-kampar.ac.id', name: 'Ahmad Rizal Siregar' },
    { email: 'ahmad2019.tps@poltek-kampar.ac.id', name: 'Ahmad Ravy' },
    { email: 'ahmad2022.ppm@students.poltek-kampar.ac.id', name: 'Ahmad Rifa' },
    {
      email: 'ahmad2022.tpks@students.poltek-kampar.ac.id',
      name: 'Ahmad Zulfan',
    },
    {
      email: 'ahmadadzhar2022.ppm@students.poltek-kampar.ac.id',
      name: 'Ahmad Adzhhar',
    },
    {
      email: 'ahmadalhanif2021.tps@students.poltek-kampar.ac.id',
      name: 'Ahmad Alhanif',
    },
    {
      email: 'ahmadriziki2022.tps@students.poltek-kampar.ac.id',
      name: 'Ahmad Rizki Amanda Hasibuan',
    },
    {
      email: 'ahmadroihanalpiko2021.tps@students.poltek-kampar.ac.id',
      name: 'Ahmad Roihan Alpiko',
    },
    {
      email: 'ahmadshodik2021.tps@students.poltek-kampar.ac.id',
      name: 'Ahmad Shodik',
    },
    {
      email: 'akcha2022.tpks@students.poltek-kampar.ac.id',
      name: 'Akcha Ramadiyansah Lubis',
    },
    { email: 'albito@poltek-kampar.ac.id', name: 'M. Albito Tarmizal' },
    {
      email: 'aldi2022.ppm@students.poltek-kampar.ac.id',
      name: 'Aldi Suriyanda',
    },
    {
      email: 'aldiahmad2022.tps@students.poltek-kampar.ac.id',
      name: 'Aldi Ahmad Siregar',
    },
    { email: 'Aldippm@poltek-kampar.ac.id', name: 'Aldi DM' },
    {
      email: 'aldotri2022.tps@students.poltek-kampar.ac.id',
      name: 'Aldotri Heriadi',
    },
    {
      email: 'alfahreza2022.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Nuzul Alfahreza',
    },
    { email: 'alfajri2021.tps@students.poltek-kampar.ac.id', name: 'Alfajri' },
    { email: 'alfarisi@poltek-kampar.ac.id', name: 'Muhammad Alfarisi' },
    {
      email: 'alfinistiawan2021.tps@students.poltek-kampar.ac.id',
      name: 'Alfin Istiawan',
    },
    {
      email: 'alfitrah2018.tps@poltek-kampar.ac.id',
      name: 'Alfitrah Mulia Insani',
    },
    {
      email: 'alfontushutapea2021.ppm@students.poltek-kampar.ac.id',
      name: 'Alfontus Hutapea',
    },
    {
      email: 'alhafidzmukras2021.tif@students.poltek-kampar.ac.id',
      name: 'Alhafidz Mukras',
    },
    {
      email: 'alnando2018.tps@poltek-kampar.ac.id',
      name: 'Alnando Nikolas Sagala',
    },
    {
      email: 'alparethutagalung2021.ppm@students.poltek-kampar.ac.id',
      name: 'Alparet Hutagalung',
    },
    {
      email: 'alrasyidi2022.abi@students.poltek-kampar.ac.id',
      name: 'Alrasyidi Alwi',
    },
    { email: 'alwiNopriansa@poltek-kampar.ac.id', name: 'Alwi Nopriansa' },
    { email: 'AmeliaAndiny@poltek-kampar.ac.id', name: 'Rindy Amelia Andiny' },
    {
      email: 'amiruddin2019.tps@poltek-kampar.ac.id',
      name: 'Amiruddin P. Ismail',
    },
    {
      email: 'anand2022.tps@students.poltek-kampar.ac.id',
      name: 'Anand Marco',
    },
    { email: 'anandayusuf@poltek-kampar.ac.id', name: 'Ananda Yusuf Anshori' },
    { email: 'andi2018.tps@poltek-kampar.ac.id', name: 'Andi Saputra Harahap' },
    { email: 'andi@poltek-kampar.ac.id', name: 'Andi Maysah' },
    {
      email: 'andikafajar@poltek-kampar.ac.id',
      name: 'Andika Fajar Syahputra',
    },
    { email: 'andisupri@poltek-kampar.ac.id', name: 'Andi Supri Tambunan' },
    { email: 'andre2019.ppm@poltek-kampar.ac.id', name: 'Andre Rivaldo' },
    {
      email: 'andre2022.ppm@students.poltek-kampar.ac.id',
      name: 'Andre Ansyah Purba',
    },
    {
      email: 'andreibrahim2022.ppm@students.poltek-kampar.ac.id',
      name: 'Andre Ibrahim',
    },
    {
      email: 'andrinofiar@poltek-kampar.ac.id',
      name: 'Andri Nofiar. AM, S.Kom., M.Kom',
    },
    {
      email: 'anggi2019.ppm@poltek-kampar.ac.id',
      name: 'Anggi Prayoga Sundawa',
    },
    {
      email: 'AnggunDinda@poltek-kampar.ac.id',
      name: 'Anggun Dinda Pitri Milenia',
    },
    {
      email: 'anishah2022.tif@students.poltek-kampar.ac.id',
      name: 'Anishah Kartari',
    },
    {
      email: 'anjas2019.tps@poltek-kampar.ac.id',
      name: 'Muhammad Anjas Rafiqi',
    },
    { email: 'ann@poltek-kampar.ac.id', name: 'Anna Dhora, S.TP., M.P.' },
    {
      email: 'annisa2022.abi@students.poltek-kampar.ac.id',
      name: 'Annisa Cahyani',
    },
    {
      email: 'ansormuhammadnasution2021.ppm@students.poltek-kampar.ac.id',
      name: 'Ansor Muhammad Nasution',
    },
    {
      email: 'antonipribadi@poltek-kampar.ac.id',
      name: 'Antoni Pribadi, S. Pd., M. Kom',
    },
    { email: 'antonius@poltek-kampar.ac.id', name: 'Antonius J. Sihotang, SP' },
    {
      email: 'aprianaMalinda@poltek-kampar.ac.id',
      name: 'Apriana Malinda Tamba',
    },
    { email: 'aprido2019.ppm@poltek-kampar.ac.id', name: 'Aprido Prayogi' },
    { email: 'ardi2019.ppm@poltek-kampar.ac.id', name: 'Ardi Ramadhan Asra' },
    { email: 'ardiansyahhamid@poltek-kampar.ac.id', name: 'Ardiansyah Hamid' },
    { email: 'arfan@poltek-kampar.ac.id', name: 'Arfan PSP' },
    {
      email: 'arga2019.tps@poltek-kampar.ac.id',
      name: 'Arga Ocsteven Simbolon',
    },
    { email: 'ari2019.tif@poltek-kampar.ac.id', name: 'Ari Dimas Susanto' },
    { email: 'ari2019.tps@poltek-kampar.ac.id', name: 'Ari Alpindo Ketaren' },
    { email: 'arif2019.tps@poltek-kampar.ac.id', name: 'Muhammad Arif' },
    {
      email: 'arif2022.ppm@students.poltek-kampar.ac.id',
      name: 'Arif Ardianto',
    },
    { email: 'arifin2018.ppm@poltek-kampar.ac.id', name: 'Arifin Ahmad' },
    {
      email: 'arifjonimalindo2021.tps@students.poltek-kampar.ac.id',
      name: 'Arif Joni Malindo',
    },
    {
      email: 'ariirawan2021.ppm@students.poltek-kampar.ac.id',
      name: 'Ari Irawan',
    },
    { email: 'arilButtuan@poltek-kampar.ac.id', name: 'Aril Buttuan' },
    { email: 'arinotif@poltek-kampar.ac.id', name: 'Arino' },
    {
      email: 'ariorusdaban2021.tps@students.poltek-kampar.ac.id',
      name: 'Ario Rusdaban',
    },
    { email: 'Aritonang@poltek-kampar.ac.id', name: 'Gabriel Aritonang' },
    { email: 'ariya2021.ppm@students.poltek-kampar.ac.id', name: 'Ariya' },
    { email: 'arjunWahyu@poltek-kampar.ac.id', name: 'Arjun Wahyu Pratomo' },
    { email: 'arya2019.tps@poltek-kampar.ac.id', name: 'Arya Satya' },
    { email: 'arya@poltek-kampar.ac.id', name: 'Arya Imansyah Ramaddan' },
    {
      email: 'aryadi2022.ppm@students.poltek-kampar.ac.id',
      name: 'Aryadi Saputra',
    },
    { email: 'arzak2019.ppm@poltek-kampar.ac.id', name: 'Muhammad Arzak' },
    { email: 'asra2022.tps@students.poltek-kampar.ac.id', name: 'Asra Lukman' },
    {
      email: 'AsrulRahmadi@poltek-kampar.ac.id',
      name: 'Asrul Rahmadi Harahap',
    },
    {
      email: 'AtiqahNajwa@poltek-kampar.ac.id',
      name: 'Atiqah Najwa Anggraini',
    },
    {
      email: 'aulia2022.tps@students.poltek-kampar.ac.id',
      name: 'Robby Fachri Aulia',
    },
    {
      email: 'auliaArief@poltek-kampar.ac.id',
      name: 'Mhd Aulia Arief Fadillah Sormin',
    },
    { email: 'ayuwindi@poltek-kampar.ac.id', name: 'Ayu Windi Rahmayani' },
    {
      email: 'azharmaulana2021.ppm@students.poltek-kampar.ac.id',
      name: 'Azhar Maulana',
    },
    {
      email: 'azizrahmantambunan2021.tps@students.poltek-kampar.ac.id',
      name: 'Aziz Rahman Tambunan',
    },
    {
      email: 'bagus2022.tpks@students.poltek-kampar.ac.id',
      name: 'Bagus Wiranata',
    },
    {
      email: 'bartolomeus2019.tif@poltek-kampar.ac.id',
      name: 'Bartolomeus Dado Mangunsong',
    },
    {
      email: 'Bayhaqqi@poltek-kampar.ac.id',
      name: 'Bayhaqqi Lailatul Qodhar ',
    },
    {
      email: 'bayuandrian2021.tps@students.poltek-kampar.ac.id',
      name: 'Bayu Andrian',
    },
    {
      email: 'beliaafifah@poltek-kampar.ac.id',
      name: 'Belia Afifah., S.T., M.T',
    },
    { email: 'BellaTri@poltek-kampar.ac.id', name: 'Bella Tri Febri' },
    { email: 'beniSetiawan@poltek-kampar.ac.id', name: 'Beni Setiawan' },
    {
      email: 'bettinatalianahampun2021.tif@students.poltek-kampar.ac.id',
      name: 'Betti Natalia Nahampun',
    },
    {
      email: 'bimapramana2021.ppm@students.poltek-kampar.ac.id',
      name: 'Bima Pramana',
    },
    {
      email: 'bintangamriputra2021.tif@students.poltek-kampar.ac.id',
      name: 'Bintang Amri Putra',
    },
    { email: 'bira2019.tif@poltek-kampar.ac.id', name: 'Bira Robiansyah' },
    { email: 'bisma2019.tps@poltek-kampar.ac.id', name: 'Bisma Setiawan' },
    { email: 'boriskaido@poltek-kampar.ac.id', name: 'Boris Kaido' },
    {
      email: 'buce2022.tpks@students.poltek-kampar.ac.id',
      name: 'Buce Werimon',
    },
    {
      email: 'budi2022.tps@students.poltek-kampar.ac.id',
      name: 'Budi Ripandra',
    },
    {
      email: 'busroh2019.tif@poltek-kampar.ac.id',
      name: 'Busroh Nurcahyani Ahmad',
    },
    { email: 'chandra2018.tif@poltek-kampar.ac.id', name: 'Chandra Wardana' },
    {
      email: 'chevin2022.tps@students.poltek-kampar.ac.id',
      name: 'Chevin Pratama Saputra Siagian',
    },
    {
      email: 'cicifinasti2021.tps@students.poltek-kampar.ac.id',
      name: 'Cici Finasti',
    },
    {
      email: 'Claudia@poltek-kampar.ac.id',
      name: 'Claudia Elisabeth Sidabutar',
    },
    { email: 'dakufatma@poltek-kampar.ac.id', name: 'Fatmayati, S.T., M.Si.' },
    { email: 'dandy2019.tps@poltek-kampar.ac.id', name: 'Dandy Efendi' },
    { email: 'dani@poltek-kampar.ac.id', name: 'Rahmat Hamdani' },
    { email: 'daniel@poltek-kampar.ac.id', name: 'Daniel Lumban Tungkup' },
    {
      email: 'danielgultom2022.tps@students.poltek-kampar.ac.id',
      name: 'Daniel Gultom',
    },
    {
      email: 'danilo2022.ppm@students.poltek-kampar.ac.id',
      name: 'Danilo Fernando',
    },
    {
      email: 'darmawan2019.tps@poltek-kampar.ac.id',
      name: 'P. Darmawan Laoli',
    },
    { email: 'darwis@poltek-kampar.ac.id', name: 'Darwis Kurniawan, S.T' },
    {
      email: 'david2019.ppm@poltek-kampar.ac.id',
      name: 'David Harapan Siahaan',
    },
    {
      email: 'david2022.tps@students.poltek-kampar.ac.id',
      name: 'David Simbora Saragi Siadari',
    },
    {
      email: 'dedesupriatna2021.ppm@students.poltek-kampar.ac.id',
      name: 'Dede Supriatna',
    },
    { email: 'dedi2019.ppm@poltek-kampar.ac.id', name: 'Dedi Irawan' },
    { email: 'defri2019.ppm@poltek-kampar.ac.id', name: 'Defri Ramadhan' },
    { email: 'defri2022.tps@students.poltek-kampar.ac.id', name: 'Defri Aldi' },
    {
      email: 'dehiya2022.tif@students.poltek-kampar.ac.id',
      name: 'Yogi Sepdu Dehiya',
    },
    {
      email: 'delanoviautami2021.tif@students.poltek-kampar.ac.id',
      name: 'Dela Novia Utami',
    },
    { email: 'dellaPutri@poltek-kampar.ac.id', name: 'Della Putri Ananda' },
    {
      email: 'denditrikurniawan2021.ppm@students.poltek-kampar.ac.id',
      name: 'Dendi Tri Kurniawan',
    },
    {
      email: 'deni2022.ppm@students.poltek-kampar.ac.id',
      name: 'Deni Syahputra Bako',
    },
    {
      email: 'denis2022.abi@students.poltek-kampar.ac.id',
      name: 'Denis Ramadhan',
    },
    {
      email: 'denny2022.ppm@students.poltek-kampar.ac.id',
      name: 'Denny Andriansyah',
    },
    {
      email: 'deryRahmadoni@poltek-kampar.ac.id',
      name: 'Dery Rahmadoni Saputra',
    },
    {
      email: 'desi2022.tpks@students.poltek-kampar.ac.id',
      name: 'Desi Horota',
    },
    { email: 'DesiNurfitriani@poltek-kampar.ac.id', name: 'Desi Nurfitriani' },
    {
      email: 'desritaerniati2021.tif@students.poltek-kampar.ac.id',
      name: 'Desrita Erniati',
    },
    { email: 'devi2019.ppm@poltek-kampar.ac.id', name: 'Devi Agustiani' },
    {
      email: 'devidsatriaanugrah2021.tps@students.poltek-kampar.ac.id',
      name: 'Devid Satria Anugrah',
    },
    {
      email: 'dewi2022.tif@students.poltek-kampar.ac.id',
      name: 'Dewi Theresia Panjaitan',
    },
    {
      email: 'dhea2022.tif@students.poltek-kampar.ac.id',
      name: 'Dhea Syaiful',
    },
    {
      email: 'dhea2022.tps@students.poltek-kampar.ac.id',
      name: 'Dhea Tiaramaya Safitri ',
    },
    {
      email: 'dheafernanda2021.tif@students.poltek-kampar.ac.id',
      name: 'Dhea Fernanda',
    },
    { email: 'diahayu@poltek-kampar.ac.id', name: 'Diah Ayu Damayanti' },
    { email: 'dian2019.tif@poltek-kampar.ac.id', name: 'Dian Nanda Anggraini' },
    {
      email: 'diana2019.tps@poltek-kampar.ac.id',
      name: 'Diana Novita Ketaren',
    },
    {
      email: 'dianaoktafiani2021.tif@students.poltek-kampar.ac.id',
      name: 'Diana Oktafiani',
    },
    { email: 'diaz2018.tif@poltek-kampar.ac.id', name: 'M. Diaz Rahmadi' },
    { email: 'dicky2019.tif@poltek-kampar.ac.id', name: 'Dicky Prima Azhari' },
    { email: 'dikicandra@poltek-kampar.ac.id', name: 'Diki Candra' },
    {
      email: 'dikkiwahyudi2021.tif@students.poltek-kampar.ac.id',
      name: 'Diki Wahyudy',
    },
    {
      email: 'dimas2019.tps@poltek-kampar.ac.id',
      name: 'Dimas Aditia Ningrat',
    },
    { email: 'dimas@poltek-kampar.ac.id', name: 'Dimas Jhon Hendrawan' },
    { email: 'dimasabimayu@poltek-kampar.ac.id', name: 'Dimas Abimayu' },
    {
      email: 'dimasegawibowo2021.tps@students.poltek-kampar.ac.id',
      name: 'Dimas Ega Wibowo',
    },
    {
      email: 'dinayanti2022.tps@students.poltek-kampar.ac.id',
      name: 'Dina Yanti Br Ginting',
    },
    {
      email: 'dindadwi2022.tif@students.poltek-kampar.ac.id',
      name: 'Dinda Dwi Wanni Putri',
    },
    {
      email: 'diniamaliaputri@poltek-kampar.ac.id',
      name: 'Dini Amalia Putri, S.P., M.MA',
    },
    {
      email: 'dio2022.tpks@students.poltek-kampar.ac.id',
      name: 'Dio Nugraha Sinaga',
    },
    { email: 'dion@poltek-kampar.ac.id', name: 'Dion Dwi Putra' },
    { email: 'dirju@poltek-kampar.ac.id', name: 'Dirju Ifangga' },
    { email: 'diva2018.tps@poltek-kampar.ac.id', name: 'Diva Yogi Husada' },
    { email: 'doni2019.tif@poltek-kampar.ac.id', name: 'Doni Dwi Sparingga' },
    {
      email: 'doni2022.ppm@students.poltek-kampar.ac.id',
      name: 'Doni Bernando Simarmata',
    },
    {
      email: 'doniOktosunario@poltek-kampar.ac.id',
      name: 'Doni Oktosunario G',
    },
    { email: 'dwi2019.tif@poltek-kampar.ac.id', name: 'Dwi Putri Nilam Cayo' },
    { email: 'egi2019.tif@poltek-kampar.ac.id', name: 'Egi Saputra' },
    { email: 'egy2019.ppm@poltek-kampar.ac.id', name: 'Eggy Dharmasyah' },
    {
      email: 'eka2022.tif@students.poltek-kampar.ac.id',
      name: 'Eka Agustina Pusung',
    },
    {
      email: 'ekaerzalia@poltek-kampar.ac.id',
      name: 'Eka Erzalia, A.Md. B.Eng',
    },
    {
      email: 'eko2022.tif@students.poltek-kampar.ac.id',
      name: 'Eko Misbahul Anam',
    },
    { email: 'ekyhamidy@poltek-kampar.ac.id', name: 'Eky El Hamidy' },
    { email: 'elga2019.ppm@poltek-kampar.ac.id', name: 'M. Elga Syahputra' },
    { email: 'elli2019.tps@poltek-kampar.ac.id', name: 'Elli M' },
    { email: 'ElmaliaDeliskan@poltek-kampar.ac.id', name: 'Elmalia Deliskan' },
    { email: 'elvira2019.tps@poltek-kampar.ac.id', name: 'Elvira Deswati' },
    {
      email: 'emanuel2022.ppm@students.poltek-kampar.ac.id',
      name: 'Emanuel Ridho',
    },
    {
      email: 'erika2022.tif@students.poltek-kampar.ac.id',
      name: 'Erika Syafitri',
    },
    { email: 'erma2018.tif@poltek-kampar.ac.id', name: 'Erma Diana' },
    {
      email: 'eshau2022.tpks@students.poltek-kampar.ac.id',
      name: 'Eshau Aprilian',
    },
    {
      email: 'estomdavinciyosianadeak2021.tps@students.poltek-kampar.ac.id',
      name: 'Estom Davinci Yosia Nadeak',
    },
    { email: 'eva2022.tif@students.poltek-kampar.ac.id', name: 'Eva Fazria' },
    { email: 'evi2019.tps@poltek-kampar.ac.id', name: 'Evi Miswanti' },
    { email: 'evyshandra@poltek-kampar.ac.id', name: 'Evy Shandra' },
    {
      email: 'fadhilhidayat2021.ppm@students.poltek-kampar.ac.id',
      name: 'Fadhil Hidayat',
    },
    {
      email: 'fadil2022.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Fadil Al Akbar',
    },
    { email: 'fadila2019.tif@poltek-kampar.ac.id', name: 'Fadila Kurnia Sari' },
    {
      email: 'fadilah2022.tif@students.poltek-kampar.ac.id',
      name: 'Fadilah Utami',
    },
    { email: 'fahri2019.ppm@poltek-kampar.ac.id', name: 'Fahri Wahyudi' },
    { email: 'fahri2019.tif@poltek-kampar.ac.id', name: 'Fahri Irawan' },
    { email: 'fahrizaRamadhan@poltek-kampar.ac.id', name: 'Fahriza Ramadhan' },
    { email: 'faiz@poltek-kampar.ac.id', name: 'Faiz Zulqirom' },
    { email: 'fajar2019.tps@poltek-kampar.ac.id', name: 'Fajar As Shidqi' },
    { email: 'fajaragawandana@poltek-kampar.ac.id', name: 'Fajar Agawandana' },
    {
      email: 'fajaraprilfakanza2021.ppm@students.poltek-kampar.ac.id',
      name: 'Fajar April Fakanza',
    },
    { email: 'fajarFarhan@poltek-kampar.ac.id', name: 'Fajar Farhan Samosir' },
    {
      email: 'fajarsetiabhakti2021.tps@students.poltek-kampar.ac.id',
      name: 'Fajar Setia Bhakti',
    },
    { email: 'fajri2019.ppm@poltek-kampar.ac.id', name: 'Fajri Ashiddiqy' },
    { email: 'farhan2019.tif@poltek-kampar.ac.id', name: 'Farhan Fauzan' },
    {
      email: 'farhan2022.tps@students.poltek-kampar.ac.id',
      name: 'Farhan Ashleh',
    },
    { email: 'faridah2018.tif@poltek-kampar.ac.id', name: 'Faridah Badriyyah' },
    {
      email: 'farizi2022.tif@students.poltek-kampar.ac.id',
      name: 'Matjen Al Farizi Siregar',
    },
    { email: 'faturrahman@poltek-kampar.ac.id', name: 'Faturrahman Alhafidz' },
    {
      email: 'fauzan2022.tpks@students.poltek-kampar.ac.id',
      name: 'Fauzan Ajima Marpaung',
    },
    { email: 'fauzanarif@poltek-kampar.ac.id', name: 'Fauzan Arif Desandro' },
    { email: 'fauziah2019.tif@poltek-kampar.ac.id', name: 'Fauziah Efani' },
    { email: 'fazri2018.tps@poltek-kampar.ac.id', name: 'Fazri' },
    {
      email: 'febrian2019.ppm@poltek-kampar.ac.id',
      name: 'Mhd Febrian Fadilla',
    },
    {
      email: 'febrianingsih2019.tif@poltek-kampar.ac.id',
      name: 'Lisa Febrianingsih',
    },
    {
      email: 'febry2022.ppm@students.poltek-kampar.ac.id',
      name: 'Febry Irawan',
    },
    {
      email: 'fenty@poltek-kampar.ac.id',
      name: 'Fenty Kurnia Oktorina,ST., M.Sc',
    },
    { email: 'ferdi@poltek-kampar.ac.id', name: 'Ferdi Febrian' },
    { email: 'FerdiFebrian@poltek-kampar.ac.id', name: 'Ferdi Febrian' },
    {
      email: 'ferdinand2022.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Iqbal Ferdinand',
    },
    { email: 'ferdirahmat@poltek-kampar.ac.id', name: 'Ferdi Rahmat' },
    {
      email: 'feriagriani@poltek-kampar.ac.id',
      name: 'Feri Agriani, S.TP., M.Si',
    },
    { email: 'Fernando@poltek-kampar.ac.id', name: 'Joel Fernando Purba' },
    { email: 'fernandus@poltek-kampar.ac.id', name: 'Fernandus' },
    { email: 'fhandayani@poltek-kampar.ac.id', name: 'Fitri Handayani, ST' },
    { email: 'fia2019.tif@poltek-kampar.ac.id', name: 'Fia Fabila' },
    { email: 'fika2019.tif@poltek-kampar.ac.id', name: 'Fika Nuril Hamdiyah' },
    {
      email: 'finanasari@poltek-kampar.ac.id',
      name: 'Fina Nasari, S. Kom., M. Kom',
    },
    {
      email: 'firdiansah2022.tpks@students.poltek-kampar.ac.id',
      name: 'Rizal Harits Firdiansah',
    },
    { email: 'firmanTarigan@poltek-kampar.ac.id', name: 'Firman Tarigan' },
    {
      email: 'fitra2019.tps@poltek-kampar.ac.id',
      name: 'Fitra Panji Utomo Putra',
    },
    {
      email: 'fitra2022.tpks@students.poltek-kampar.ac.id',
      name: 'Fitra Fadhilla Yusuf',
    },
    { email: 'fitri@poltek-kampar.ac.id', name: 'Fitri, S.T., M.Sc.' },
    {
      email: 'fitria2018.abi@poltek-kampar.ac.id',
      name: 'Fitria Melsi Wendra',
    },
    {
      email: 'fitrihidayani2018.tps@poltek-kampar.ac.id',
      name: 'Fitri Hidayani',
    },
    { email: 'FitriWahyuni@poltek-kampar.ac.id', name: 'Fitri Wahyuni' },
    {
      email: 'fransiskaloru2021.tps@students.poltek-kampar.ac.id',
      name: 'Fransiska Loru',
    },
    { email: 'fredySanjiwo@poltek-kampar.ac.id', name: 'Fredy Sanjiwo' },
    {
      email: 'friskaameliavega2021.tif@students.poltek-kampar.ac.id',
      name: 'Friska Amelia Vega',
    },
    { email: 'fuji2019.tif@poltek-kampar.ac.id', name: 'Fuji Sri Sasmita' },
    {
      email: 'gani2022.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Abdul Gani',
    },
    { email: 'genta@poltek-kampar.ac.id', name: 'Genta Ramadhan' },
    { email: 'GioDamarzuki@poltek-kampar.ac.id', name: 'Gio Damarzuki' },
    { email: 'guntur2019.tif@poltek-kampar.ac.id', name: 'Guntur' },
    { email: 'guntur2019.tps@poltek-kampar.ac.id', name: 'Muhammad Guntur' },
    { email: 'GuruhFajrin@poltek-kampar.ac.id', name: 'Guruh Fajrin Nugroho' },
    {
      email: 'habibullah2022.ppm@students.poltek-kampar.ac.id',
      name: 'Habibullah',
    },
    {
      email: 'hafid2022.tpks@students.poltek-kampar.ac.id',
      name: 'Hafid Muzaki',
    },
    { email: 'hafis2018.ppm@poltek-kampar.ac.id', name: 'M. Hafis Alfarido' },
    { email: 'hafizh2019.tps@poltek-kampar.ac.id', name: 'Hafizh Ash Shiddiq' },
    { email: 'hairulRambe@poltek-kampar.ac.id', name: 'Hairul Rambe' },
    {
      email: 'hamzahJamaluddin@poltek-kampar.ac.id',
      name: 'Hamzah Jamaluddin',
    },
    {
      email: 'hanifah.khairiah@poltek-kampar.ac.id',
      name: 'Hanifah Khairiah, S.ST., M.T.',
    },
    { email: 'hardiyat2018.ppm@poltek-kampar.ac.id', name: 'Hardiyat Maulana' },
    { email: 'harisahmadi@poltek-kampar.ac.id', name: 'Haris Ahmadi' },
    { email: 'Haritps@poltek-kampar.ac.id', name: 'Hari Ribowo' },
    { email: 'harmiyelmi@poltek-kampar.ac.id', name: 'Harmi Yelmi' },
    { email: 'hasbi@poltek-kampar.ac.id', name: 'Khairul Hasbi' },
    {
      email: 'hawa2022.abi@students.poltek-kampar.ac.id',
      name: 'Hawa Vitria Nur Qholiva',
    },
    {
      email: 'hayatul.rahmat@poltek-kampar.ac.id',
      name: 'Hayatul Khairul Rahmat, S.Sos., M.Han.',
    },
    { email: 'hendri2019.ppm@poltek-kampar.ac.id', name: 'Hendri Saputra' },
    { email: 'hendrianto.tif2020@poltek-kampar.ac.id', name: 'Hendrianto' },
    {
      email: 'hennitagultom2021.tif@students.poltek-kampar.ac.id',
      name: 'Hennita Gultom',
    },
    {
      email: 'heral2022.tps@students.poltek-kampar.ac.id',
      name: 'Heral Marwan',
    },
    { email: 'herfi@poltek-kampar.ac.id', name: 'Herfi D. Windra' },
    {
      email: 'heri2022.tps@students.poltek-kampar.ac.id',
      name: 'Heri Wahyuni',
    },
    { email: 'herliana2018.tps@poltek-kampar.ac.id', name: 'Herliana Putri' },
    {
      email: 'horyn2019.ppm@poltek-kampar.ac.id',
      name: 'Horyn Tria Pamiaro Purba',
    },
    { email: 'husnul2019.ppm@poltek-kampar.ac.id', name: 'Husnul Fikri' },
    { email: 'ict@siakad.ac.id', name: 'ict center' },
    {
      email: 'ihsan2022.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Ihsan Baja',
    },
    { email: 'iis2019.abi@poltek-kampar.ac.id', name: 'Iis Pramita' },
    { email: 'ika2019.tps@poltek-kampar.ac.id', name: 'Ika Lestari' },
    { email: 'ikhlasul@poltek-kampar.ac.id', name: 'Ikhlasul Amali' },
    { email: 'ikmal2019.ppm@poltek-kampar.ac.id', name: 'Mhd. Ikmal Firdausi' },
    { email: 'ilham2019.tif@poltek-kampar.ac.id', name: 'Ilham Agusta' },
    { email: 'ilham2019.tps@poltek-kampar.ac.id', name: 'Ilham Saputra' },
    { email: 'imelda2018.abi@poltek-kampar.ac.id', name: 'Imelda' },
    { email: 'indah2019.tif@poltek-kampar.ac.id', name: 'Indah Aprilia' },
    {
      email: 'indah@poltek-kampar.ac.id',
      name: 'Indah Purnama Putri, S.Pd., M.Si.',
    },
    {
      email: 'indra2019.tps@poltek-kampar.ac.id',
      name: 'Indra Saut Hasoloan Siahaan',
    },
    {
      email: 'indrahabibie@poltek-kampar.ac.id',
      name: 'Indra Habibie, SE., MM',
    },
    {
      email: 'indrahasanwirayuda2021.tps@students.poltek-kampar.ac.id',
      name: 'Indra Hasan Wirayuda',
    },
    { email: 'insan2019.ppm@poltek-kampar.ac.id', name: 'Insan Ma' },
    {
      email: 'insanmujahidin2021.tps@students.poltek-kampar.ac.id',
      name: 'Insan Mujahiddin',
    },
    {
      email: 'insanrahman2021.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Insan Rahman',
    },
    { email: 'iqbal2019.tif@poltek-kampar.ac.id', name: 'Muhammad Iqbal' },
    { email: 'iqbal@poltek-kampar.ac.id', name: 'M. Iqbal Hambali' },
    {
      email: 'iqbalmustafa2022.ppm@students.poltek-kampar.ac.id',
      name: 'Iqbal Mustafa',
    },
    {
      email: 'irdansyah2021.ppm@students.poltek-kampar.ac.id',
      name: 'Irdansyah',
    },
    {
      email: 'irdanyusnansyah2021.tps@students.poltek-kampar.ac.id',
      name: 'Irdan Yusnansyah',
    },
    {
      email: 'irpanalamsyah2021.ppm@students.poltek-kampar.ac.id',
      name: 'Irpan Alamsyah',
    },
    { email: 'irwan@poltek-kampar.ac.id', name: 'Purnama Irwan, S.T., M.T.' },
    { email: 'irwanda@poltek-kampar.ac.id', name: 'Irwanda Lubis' },
    {
      email: 'irwando2022.tpks@students.poltek-kampar.ac.id',
      name: 'Irwando Siahaan',
    },
    { email: 'isma2022.tpks@students.poltek-kampar.ac.id', name: 'Isma Halil' },
    { email: 'isnainiFitriati@poltek-kampar.ac.id', name: 'Isnaini Fitriati' },
    {
      email: 'ivanfadhilah@poltek-kampar.ac.id',
      name: 'Ivan Fadhilah, ST, MT',
    },
    { email: 'iwan@poltek-kampar.ac.id', name: 'Iwan' },
    {
      email: 'iyanbastiansianipar2021.tps@students.poltek-kampar.ac.id',
      name: 'Iyan Bastian Sianipar',
    },
    { email: 'JamaludinArif@poltek-kampar.ac.id', name: 'Jamaludin Arif' },
    { email: 'jamiah2021.tif@students.poltek-kampar.ac.id', name: 'Jami' },
    { email: 'jamrudi2019.tif@poltek-kampar.ac.id', name: 'Jamrudi Abdillah' },
    {
      email: 'jaser2019.tps@poltek-kampar.ac.id',
      name: 'Jaser Mando P Sitompul',
    },
    { email: 'jesikatif@poltek-kampar.ac.id', name: 'Jesika' },
    { email: 'johan@poltek-kampar.ac.id', name: 'Johan Maryanto Sinaga' },
    {
      email: 'jonathan2019.tps@poltek-kampar.ac.id',
      name: 'Jonathan Donisius Hasugian',
    },
    {
      email: 'josua2019.ppm@poltek-kampar.ac.id',
      name: 'Josua Rahmat Telaumbanua',
    },
    { email: 'juni2022.tif@poltek-kampar.ac.id', name: 'Juni Anggraini' },
    { email: 'junipernando@poltek-kampar.ac.id', name: 'Juni Pernando Lubis' },
    { email: 'kefinTrifano@poltek-kampar.ac.id', name: 'Kefin Trifano' },
    {
      email: 'kelana2022.ppm@students.poltek-kampar.ac.id',
      name: 'Iqbal Satria Kelana',
    },
    { email: 'keuangan@siakad.ac.id', name: 'OP Keuangan' },
    { email: 'khairul2019.ppm@poltek-kampar.ac.id', name: 'Khairul Anwar' },
    { email: 'khairulAbidin@poltek-kampar.ac.id', name: 'Khairul Abidin' },
    { email: 'khairunisa2019.tif@poltek-kampar.ac.id', name: 'Khairunnisa' },
    {
      email: 'khoirul2022.tif@students.poltek-kampar.ac.id',
      name: 'Khoirul Adlin Hasibuan',
    },
    { email: 'khuszaimah@poltek-kampar.ac.id', name: 'Khuszaimah Azizah' },
    { email: 'kristian2019.tif@poltek-kampar.ac.id', name: 'Kristian Laiya' },
    {
      email: 'landong2019.ppm@poltek-kampar.ac.id',
      name: 'Landong Sait Simatupang',
    },
    {
      email: 'lathifahfibahasanah2021.tif@students.poltek-kampar.ac.id',
      name: 'Lathifah Fiba Hasanah',
    },
    {
      email: 'leonardo2022.tps@students.poltek-kampar.ac.id',
      name: 'Leonardo Pangaribuan',
    },
    {
      email: 'lestarisahfitri2021.tif@students.poltek-kampar.ac.id',
      name: 'Lestari Sahfitri',
    },
    {
      email: 'lidia2022.tif@students.poltek-kampar.ac.id',
      name: 'Lidia Sepianti',
    },
    {
      email: 'lilian2022.abi@students.poltek-kampar.ac.id',
      name: 'Lilian Nethania Nava',
    },
    { email: 'LinsiAfriani@poltek-kampar.ac.id', name: 'Linsi Afriani' },
    { email: 'lipa2022.tps@students.poltek-kampar.ac.id', name: 'Lipa Rahmad' },
    { email: 'lisa2019.tif@poltek-kampar.ac.id', name: 'Lisa Afriani' },
    {
      email: 'lucky2022.tif@students.poltek-kampar.ac.id',
      name: 'Lucky Boy Pandapotan',
    },
    {
      email: 'LufitraSari@poltek-kampar.ac.id',
      name: 'Yanti Lufitra Sari Sitorus ',
    },
    {
      email: 'luhut2019.tps@poltek-kampar.ac.id',
      name: 'Luhut Pandapotan Harahap',
    },
    { email: 'lusiana2019.ppm@poltek-kampar.ac.id', name: 'Lusiana' },
    {
      email: 'lutfia-bamatraf@poltek-kampar.ac.id',
      name: 'Lutfia Bamatraf, ST., MT',
    },
    {
      email: 'lutfialfiansyah2021.ppm@students.poltek-kampar.ac.id',
      name: 'Lutfi Alfiansyah',
    },
    {
      email: 'luthfiah2019.tps@poltek-kampar.ac.id',
      name: 'Luthfiah Afifah Aprilia',
    },
    { email: 'm.ikbal2021.tps@students.poltek-kampar.ac.id', name: 'M. Ikbal' },
    {
      email: 'm.rifihamdani2021.tps@students.poltek-kampar.ac.id',
      name: 'M. Rifi Hamdani',
    },
    { email: 'm2019.tif@poltek-kampar.ac.id', name: 'M. Nur Alim Ritonga' },
    { email: 'mabrur2019.abi@poltek-kampar.ac.id', name: 'Mabrur' },
    { email: 'mahdalena@poltek-kampar.ac.id', name: 'Mahdalena Amalia' },
    { email: 'mahdiawan.tif@poltek-kampar.ac.id', name: 'Mahdiawan-ICT' },
    {
      email: 'mahendramahendra2021.tps@students.poltek-kampar.ac.id',
      name: 'Mahendra',
    },
    {
      email: 'majid2019.ppm@poltek-kampar.ac.id',
      name: 'Muhammad Andre Majid',
    },
    { email: 'mardi2019.tps@poltek-kampar.ac.id', name: 'Mardiansyah' },
    { email: 'mardiah2021.abi@students.poltek-kampar.ac.id', name: 'Mardiah' },
    {
      email: 'mardiva2022.tps@students.poltek-kampar.ac.id',
      name: 'Zulia Khairi Mardiva',
    },
    {
      email: 'mariana2022.abi@students.poltek-kampar.ac.id',
      name: 'Mariana Octora Br. Turnip',
    },
    {
      email: 'marlinawatybrlubis2021.tif@students.poltek-kampar.ac.id',
      name: 'Marlina Waty Br Lubis',
    },
    {
      email: 'marsia2022.tpks@students.poltek-kampar.ac.id',
      name: 'Marsia Putriani',
    },
    { email: 'masriyanto@poltek-kampar.ac.id', name: 'Masriyanto, ST' },
    {
      email: 'masrur2019.tps@poltek-kampar.ac.id',
      name: 'Muhammad Masrur Farhan',
    },
    {
      email: 'maulana2019.tps@poltek-kampar.ac.id',
      name: 'Maulana Nanda Mahedra',
    },
    {
      email: 'maulanaalfarel2021.tif@students.poltek-kampar.ac.id',
      name: 'Maulana Alfarel',
    },
    {
      email: 'maulia2019.ppm@poltek-kampar.ac.id',
      name: 'M. Maulia Faturrahman',
    },
    {
      email: 'meldi2022.ppm@students.poltek-kampar.ac.id',
      name: 'Meldi Saputra',
    },
    { email: 'melinda2019.tps@poltek-kampar.ac.id', name: 'Melinda' },
    {
      email: 'melysa2019.tif@poltek-kampar.ac.id',
      name: 'Melysa Anggita Rani',
    },
    { email: 'merlia@poltek-kampar.ac.id', name: 'Merlia Rahmayani' },
    {
      email: 'mhd2019.tps@poltek-kampar.ac.id',
      name: 'Mhd. Ade Gilang Prayoga',
    },
    {
      email: 'MichaelYehezkiel@poltek-kampar.ac.id',
      name: 'Michael Yehezkiel',
    },
    {
      email: 'milleventogap2021.tps@students.poltek-kampar.ac.id',
      name: 'Milleven Togap Gabriel Simbolon',
    },
    { email: 'miranti2022.tif@students.poltek-kampar.ac.id', name: 'Miranti' },
    { email: 'muammar2019.ppm@poltek-kampar.ac.id', name: 'Muammar Arif' },
    { email: 'muammaryasir@poltek-kampar.ac.id', name: 'Muammar Yasir' },
    { email: 'mufti2019.ppm@poltek-kampar.ac.id', name: 'Khairul Mufti' },
    {
      email: 'muhamadasrofi2021.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Asrofi',
    },
    { email: 'MuhamadFadli@poltek-kampar.ac.id', name: 'Muhamad Fadli' },
    {
      email: 'muhammad2018.tps@poltek-kampar.ac.id',
      name: 'Muhammad alKausar',
    },
    { email: 'muhammad2019.tps@poltek-kampar.ac.id', name: 'Muhamad Guspikar' },
    { email: 'muhammad@poltek-kampar.ac.id', name: 'Muhammad Alam Saputra' },
    {
      email: 'muhammadabdurrahmanalfatah2021.tif@students.poltek-kampar.ac.id',
      name: 'Muhammad Abdurraman Alfatah',
    },
    {
      email: 'muhammadadimaulana2021.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Adi Maulana',
    },
    {
      email: 'muhammadaditya@poltek-kampar.ac.id',
      name: 'Muhammad Raihan Aditya',
    },
    {
      email: 'muhammadahsan2018.tps@poltek-kampar.ac.id',
      name: 'Muhammad Ahsan Jihadan',
    },
    {
      email: 'muhammaddoiwanmuchlis2021.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Doiwan Muchlis',
    },
    {
      email: 'muhammadfahimroyan2021.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Fahim Royan ',
    },
    { email: 'MuhammadFauzan@poltek-kampar.ac.id', name: 'Muhammad Fauzan' },
    {
      email: 'muhammadhabibluthfi2021.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Habib Luthfi',
    },
    {
      email: 'muhammadi@poltek-kampar.ac.id',
      name: 'Muhammad Iqbal Ardiansyah',
    },
    { email: 'muhammadihsan@poltek-kampar.ac.id', name: 'Muhammad Ihsan' },
    {
      email: 'muhammadkurniawan@poltek-kampar.ac.id',
      name: 'Muhammad Kurniawan',
    },
    {
      email: 'muhammadnovriyardi@poltek-kampar.ac.id',
      name: 'Muhammad Novriyardi',
    },
    { email: 'MuhammadRifki@poltek-kampar.ac.id', name: 'Muhammad Rifki' },
    {
      email: 'muhammadzaulhazim2021.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Zaul Hazim',
    },
    {
      email: 'MuhammadZulkarnaen@poltek-kampar.ac.id',
      name: 'Muhammad Zulkarnaen',
    },
    {
      email: 'muhazziraldianpanjaitan2021.tps@students.poltek-kampar.ac.id',
      name: 'Muhazzir Aldian Panjaitan',
    },
    { email: 'mukhlis2019.tps@poltek-kampar.ac.id', name: 'Muhammad Mukhlis' },
    {
      email: 'mukhlisHidayanto@poltek-kampar.ac.id',
      name: 'Mukhlis Hidayanto',
    },
    { email: 'mulono@poltek-kampar.ac.id', name: 'Dr. Mulono Apriyanto' },
    { email: 'MulyaSafitri@poltek-kampar.ac.id', name: 'Mulya Safitri' },
    {
      email: 'mumtazah2022.tif@students.poltek-kampar.ac.id',
      name: 'Ines Haya Mumtazah',
    },
    {
      email: 'munthe2022.tps@students.poltek-kampar.ac.id',
      name: 'Imam Ghozali Munthe',
    },
    {
      email: 'mustikadelima2021.tif@students.poltek-kampar.ac.id',
      name: 'Mustika Delima',
    },
    {
      email: 'nabil2022.tpks@students.poltek-kampar.ac.id',
      name: 'Nabil Faturrahman',
    },
    {
      email: 'nadila2022.tif@students.poltek-kampar.ac.id',
      name: 'Nadila Darmawan',
    },
    { email: 'nadya2018.tps@poltek-kampar.ac.id', name: 'Nadya Elfitri' },
    {
      email: 'najif2022.ppm@students.poltek-kampar.ac.id',
      name: 'Nur Kholid Najif',
    },
    {
      email: 'najmudin2019.tps@poltek-kampar.ac.id',
      name: 'Najmudin Al Hafizh',
    },
    {
      email: 'najwa2022.tif@students.poltek-kampar.ac.id',
      name: 'Najwa Auliyah',
    },
    { email: 'nanang2019.ppm@poltek-kampar.ac.id', name: 'Nanang Mujahid' },
    { email: 'nanang@poltek-kampar.ac.id', name: 'Nanang' },
    {
      email: 'nanda2022.tif@students.poltek-kampar.ac.id',
      name: 'Nanda Afriani',
    },
    { email: 'nasrippm@poltek-kampar.ac.id', name: 'Nasri' },
    {
      email: 'neriyes2022.tpks@students.poltek-kampar.ac.id',
      name: 'Neriyes Touver',
    },
    { email: 'neti2019.tps@poltek-kampar.ac.id', name: 'Neti Nurzanah' },
    { email: 'ngadiyanti@poltek-kampar.ac.id', name: 'Ngadiyanti' },
    { email: 'niakumalasari@poltek-kampar.ac.id', name: 'Nia Kumala Sari' },
    {
      email: 'niardiyanto2019.ppm@poltek-kampar.ac.id',
      name: 'Sandi Niardiyanto',
    },
    {
      email: 'niken@poltek-kampar.ac.id',
      name: 'Niken Ellani Patitis, S.P., M.T.',
    },
    {
      email: 'nikenastrizlaguna2021.tif@students.poltek-kampar.ac.id',
      name: 'Niken Astriz Laguna',
    },
    { email: 'nina@poltek-kampar.ac.id', name: 'Nina Veronika, S.T., M.Sc' },
    { email: 'nonong@poltek-kampar.ac.id', name: 'Nonong' },
    {
      email: 'novan2022.ppm@students.poltek-kampar.ac.id',
      name: 'Novan Yuliansyah',
    },
    {
      email: 'novelinda2022.ppm@students.poltek-kampar.ac.id',
      name: 'Novelinda',
    },
    { email: 'novi2019.tif@poltek-kampar.ac.id', name: 'Novi Wahyuni' },
    { email: 'NoviaArfitri@poltek-kampar.ac.id', name: 'Novia Arfitri' },
    { email: 'novita2018.abi@poltek-kampar.ac.id', name: 'Novita Sari' },
    { email: 'novreza@poltek-kampar.ac.id', name: 'Novreza Andika' },
    { email: 'novri2019.tif@poltek-kampar.ac.id', name: 'Novri Ramadani' },
    {
      email: 'nugraha2022.tps@students.poltek-kampar.ac.id',
      name: 'Syahrul Ikhsan Nugraha',
    },
    { email: 'nur2018.tps@poltek-kampar.ac.id', name: 'Nur Hasmi' },
    { email: 'nur2019.tif@poltek-kampar.ac.id', name: 'Nur Aida' },
    {
      email: 'nur2022.tpks@students.poltek-kampar.ac.id',
      name: 'Nur Salbiah Lubis',
    },
    {
      email: 'nurarifsetiawan2021.ppm@students.poltek-kampar.ac.id',
      name: 'Nur Arif Setiawan',
    },
    { email: 'nurbit@poltek-kampar.ac.id', name: 'Nurbit.,S.IP.,MH' },
    { email: 'nurfa2019.tps@poltek-kampar.ac.id', name: 'Nurfazira' },
    {
      email: 'nurhaliza2021.tif@students.poltek-kampar.ac.id',
      name: 'Nur Haliza',
    },
    {
      email: 'nurhidayah2022.tif@students.poltek-kampar.ac.id',
      name: 'Nurhidayah Novitasari',
    },
    {
      email: 'nurkholis@poltek-kampar.ac.id',
      name: 'Ir. Nurkholis, ST., M.Kom',
    },
    {
      email: 'nurliza2022.tps@students.poltek-kampar.ac.id',
      name: 'Nurliza Putri Ismanto',
    },
    {
      email: 'nurmukbin2021.ppm@students.poltek-kampar.ac.id',
      name: 'Nurmukbin',
    },
    { email: 'nurqolbiadin@poltek-kampar.ac.id', name: 'Nur Qolbiadin Zahir' },
    {
      email: 'nurul2022.tif@students.poltek-kampar.ac.id',
      name: 'Nurul Rejeki',
    },
    {
      email: 'nurulamelia2022.tif@students.poltek-kampar.ac.id',
      name: 'Nurul Amelia',
    },
    { email: 'nurzakia@poltek-kampar.ac.id', name: 'Nurzakia Fadilah' },
    {
      email: 'nur_asma@poltek-kampar.ac.id',
      name: 'Nur Asma Deli, S.T., M.Si.',
    },
    { email: 'okky2019.tps@poltek-kampar.ac.id', name: 'Okky Noverta' },
    {
      email: 'onra2022.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Alfarizy Onra',
    },
    { email: 'op_akademik@siakad.ac.id', name: 'Operator Akademik' },
    {
      email: 'pahmi2022.tpks@students.poltek-kampar.ac.id',
      name: 'Pahmi Sinaga',
    },
    {
      email: 'pajrin2022.tps@students.poltek-kampar.ac.id',
      name: 'Muhammad Pajrin',
    },
    { email: 'pandu2019.ppm@poltek-kampar.ac.id', name: 'Pandu Danang Sudiro' },
    {
      email: 'panjulia2019.ppm@poltek-kampar.ac.id',
      name: 'Panjulia Sandi Parapat',
    },
    {
      email: 'patriciaaliyah2021.tps@students.poltek-kampar.ac.id',
      name: 'Patricia Aliyah',
    },
    {
      email: 'pawelsiallagan2021.tif@students.poltek-kampar.ac.id',
      name: 'Pawel Siallagan',
    },
    {
      email: 'pebredo2022.tps@students.poltek-kampar.ac.id',
      name: 'Pebredo Insar Harahap',
    },
    { email: 'pernando2019.ppm@poltek-kampar.ac.id', name: 'Pernando' },
    { email: 'pirmantoppm@poltek-kampar.ac.id', name: 'Pirmanto' },
    {
      email: 'pitri2022.tpks@students.poltek-kampar.ac.id',
      name: 'Pitri Hidayat',
    },
    { email: 'prama2019.tps@poltek-kampar.ac.id', name: 'Prama Jaya Harefa' },
    {
      email: 'pratama2022.tps@students.poltek-kampar.ac.id',
      name: 'Dicky Dharma Pratama',
    },
    {
      email: 'pratomo2022.ppm@students.poltek-kampar.ac.id',
      name: 'Fachri Legi Pratomo',
    },
    {
      email: 'prayekti2022.ppm@students.poltek-kampar.ac.id',
      name: 'Nathan Dwi Prayekti',
    },
    {
      email: 'pritty2022.tps@students.poltek-kampar.ac.id',
      name: 'Pritty Larasati',
    },
    {
      email: 'psalmenhalomoansihotang2021.ppm@students.poltek-kampar.ac.id',
      name: 'Psalmen Halomoan Sihotang',
    },
    {
      email: 'pujahermawati2021.tif@students.poltek-kampar.ac.id',
      name: 'Puja Hermawati',
    },
    { email: 'puput2019.tps@poltek-kampar.ac.id', name: 'Puput Handriyani' },
    { email: 'purdiantoro@poltek-kampar.ac.id', name: 'Purdiantoro' },
    { email: 'pustaka@siakad.ac.id', name: 'OP Pustaka' },
    {
      email: 'puteri2022.tif@students.poltek-kampar.ac.id',
      name: 'Puteri Yohana Br Sitompul',
    },
    { email: 'putraJagaRaga@poltek-kampar.ac.id', name: 'Putra Jaga Raga' },
    { email: 'putri2018.tif@poltek-kampar.ac.id', name: 'Putri Handa Yani' },
    { email: 'putri2019.tps@poltek-kampar.ac.id', name: 'Putri Jusumi Ayuni' },
    {
      email: 'putri2022.tps@students.poltek-kampar.ac.id',
      name: 'Putri Fatmala',
    },
    {
      email: 'PutriAtika@poltek-kampar.ac.id',
      name: 'Putri Atika Dewi Kataren',
    },
    { email: 'RadaIntan@poltek-kampar.ac.id', name: 'Rada Intan Syafitri' },
    {
      email: 'raditiya2022.tps@students.poltek-kampar.ac.id',
      name: 'Raditiya Ramdani',
    },
    { email: 'rafi2019.ppm@poltek-kampar.ac.id', name: 'M. Rafi' },
    {
      email: 'rafif2022.tps@students.poltek-kampar.ac.id',
      name: 'Fairuz Rizki Rafif',
    },
    { email: 'rahma2019.tps@poltek-kampar.ac.id', name: 'Rahmatunnisa' },
    {
      email: 'rahma2022.tps@students.poltek-kampar.ac.id',
      name: 'Rahma Sari Nasution',
    },
    {
      email: 'rahmadakbar@poltek-kampar.ac.id',
      name: 'Rahmad Akbar, S.T., M.M.',
    },
    {
      email: 'rahmadani2022.tpks@students.poltek-kampar.ac.id',
      name: 'Habib Fazrur Rahmadani',
    },
    { email: 'rahmadia2019.tps@poltek-kampar.ac.id', name: 'Rahmadia Futri' },
    {
      email: 'rahmadinasitorus2021.tif@students.poltek-kampar.ac.id',
      name: 'Rahmadina Sitorus',
    },
    {
      email: 'rahmadzulfadly2021.ppm@students.poltek-kampar.ac.id',
      name: 'Rahmad Zulfadly Dongoran',
    },
    { email: 'rahmat2019.tif@poltek-kampar.ac.id', name: 'Rahmat Hamdani' },
    { email: 'rahmat2019.tps@poltek-kampar.ac.id', name: 'Rahmat Hidayat' },
    { email: 'rahmat@poltek-kampar.ac.id', name: 'Rahmat' },
    {
      email: 'rahmatg2022.tps@students.poltek-kampar.ac.id',
      name: 'Rahmat Gideon Sinaga',
    },
    {
      email: 'rahmathidayat2021.ppm@students.poltek-kampar.ac.id',
      name: 'Rahmat Hidayat',
    },
    { email: 'rahmitif@poltek-kampar.ac.id', name: 'Rahmi' },
    {
      email: 'raihanmaulana2021.ppm@students.poltek-kampar.ac.id',
      name: 'Raihan Maulana',
    },
    { email: 'rajudin2022.tps@students.poltek-kampar.ac.id', name: 'Rajudin' },
    { email: 'raka@poltek-kampar.ac.id', name: 'Raka Saltsabillah Pazal' },
    { email: 'RamaWijaya@poltek-kampar.ac.id', name: 'Muhammad Rama Wijaya' },
    { email: 'randi2019.ppm@poltek-kampar.ac.id', name: 'Randi Rahman' },
    {
      email: 'randiansyah202.tpks@students.poltek-kampar.ac.id',
      name: 'Randiansyah',
    },
    {
      email: 'randy2022.tpks@students.poltek-kampar.ac.id',
      name: 'Randy Wahdan Telaumbanua',
    },
    {
      email: 'rangga2019.tps@poltek-kampar.ac.id',
      name: 'Rangga Pujata Efendi',
    },
    { email: 'rani2018.abi@poltek-kampar.ac.id', name: 'Rani Slapangki' },
    { email: 'raofan@poltek-kampar.ac.id', name: 'Raofan' },
    {
      email: 'rapialqolbi2021.tps@students.poltek-kampar.ac.id',
      name: 'Rapi Al Qolbi',
    },
    { email: 'ratna2019.abi@poltek-kampar.ac.id', name: 'Ratna' },
    {
      email: 'RatriPramudita@poltek-kampar.ac.id',
      name: 'Ratri Pramudita Ningsih',
    },
    {
      email: 'ratunatalia2022.tif@students.poltek-kampar.ac.id',
      name: 'Ratu Natalia Marjani Ufayrah',
    },
    { email: 'raull2018.ppm@poltek-kampar.ac.id', name: 'Raull Vadhilla. D' },
    { email: 'raya2019.tif@poltek-kampar.ac.id', name: 'Raya. S' },
    {
      email: 'rayhan2022.tps@students.poltek-kampar.ac.id',
      name: 'M. Rayhan Rosivel',
    },
    {
      email: 'raywandialmubdi2021.tps@students.poltek-kampar.ac.id',
      name: 'Raywandi Almubdi',
    },
    { email: 'razita@poltek-kampar.ac.id', name: 'Razita Hariani, ST., MT' },
    {
      email: 'razoki2022.tps@students.poltek-kampar.ac.id',
      name: 'Razoki Anhar Bakar',
    },
    { email: 'redhoandika@students.poltek-kampar.ac.id', name: 'redho andika' },
    { email: 'rehan2021.ppm@students.poltek-kampar.ac.id', name: 'Rehan' },
    { email: 'rehandi2021.tps@students.poltek-kampar.ac.id', name: 'Rehandi' },
    {
      email: 'reiza2022.tif@students.poltek-kampar.ac.id',
      name: 'Reiza Bias Utama',
    },
    { email: 'renaldy2019.tif@poltek-kampar.ac.id', name: 'Renaldy Darma' },
    { email: 'rendi2021.ppm@students.poltek-kampar.ac.id', name: 'Rendi' },
    {
      email: 'reqi2019.ppm@poltek-kampar.ac.id',
      name: 'Reqi Hendrima Gunawan',
    },
    { email: 'resis2018.abi@poltek-kampar.ac.id', name: 'Resis Marlita' },
    { email: 'reski@poltek-kampar.ac.id', name: 'Reski Safda Putra' },
    {
      email: 'retiahutabarat2021.tps@students.poltek-kampar.ac.id',
      name: 'Retia Hutabarat',
    },
    {
      email: 'retno2022.tif@students.poltek-kampar.ac.id',
      name: 'Retno Anggraini',
    },
    {
      email: 'reza2022.ppm@students.poltek-kampar.ac.id',
      name: 'Reza Pranata Tarigan',
    },
    { email: 'RezaHasim@poltek-kampar.ac.id', name: 'Reza Hasim Rabbani' },
    {
      email: 'rezi2022.tif@students.poltek-kampar.ac.id',
      name: 'Jonatami Maif Rezi',
    },
    { email: 'reziki@poltek-kampar.ac.id', name: 'Reziki Anugrah' },
    { email: 'rezkiputra@poltek-kampar.ac.id', name: 'Rezki Putra' },
    { email: 'rezky2018.tps@poltek-kampar.ac.id', name: 'Rezky Wahyu Saputra' },
    {
      email: 'rian2022.tps@students.poltek-kampar.ac.id',
      name: 'Rian Ardy Aprilian Syah',
    },
    { email: 'riandi2019.ppm@poltek-kampar.ac.id', name: 'Riandi' },
    { email: 'riano2019.tps@poltek-kampar.ac.id', name: 'Riano Firdaus' },
    { email: 'rianto2019.tif@poltek-kampar.ac.id', name: 'Rianto Naldi' },
    { email: 'ribut2019.tif@poltek-kampar.ac.id', name: 'Ribut Wibowo Rahayu' },
    { email: 'rico2019.ppm@poltek-kampar.ac.id', name: 'Rico Gunawan' },
    { email: 'ridho2019.ppm@poltek-kampar.ac.id', name: 'Ridho Ramadhan' },
    { email: 'rido@poltek-kampar.ac.id', name: 'Rido Ksatria Siburian' },
    {
      email: 'riduansyah2021.ppm@students.poltek-kampar.ac.id',
      name: 'Riduan Syah',
    },
    { email: 'ridwan@poltek-kampar.ac.id', name: 'M.Ridwan, S.T., M.T.' },
    {
      email: 'rieke2019.ppm@poltek-kampar.ac.id',
      name: 'Rieke Cerlina Oktovia',
    },
    {
      email: 'rifqi2022.ppm@students.poltek-kampar.ac.id',
      name: 'Fauzan Dafa Rifqi',
    },
    { email: 'rika2019.tif@poltek-kampar.ac.id', name: 'Rika Novita Sari' },
    {
      email: 'rikaanalinda2021.tif@students.poltek-kampar.ac.id',
      name: 'Rikaana Linda',
    },
    {
      email: 'riki2022.tps@students.poltek-kampar.ac.id',
      name: 'Riki Prayetno',
    },
    {
      email: 'riko2022.tps@students.poltek-kampar.ac.id',
      name: 'Riko Hadi Pratama',
    },
    {
      email: 'riky2022.tps@students.poltek-kampar.ac.id',
      name: 'Riky Ananda Siregar',
    },
    {
      email: 'rini2022.ppm@students.poltek-kampar.ac.id',
      name: 'Rini Arlina Sitorus',
    },
    {
      email: 'rio2018.tps@poltek-kampar.ac.id',
      name: 'Rio ibnu ari febrianta',
    },
    { email: 'rio2022.tpks@students.poltek-kampar.ac.id', name: 'Rio Afandi' },
    {
      email: 'risalatul2022.tps@students.poltek-kampar.ac.id',
      name: 'Risalatul Halimah',
    },
    { email: 'RiskiLumban@poltek-kampar.ac.id', name: 'Riski Lumban Tobing' },
    {
      email: 'riskyramadani2021.ppm@students.poltek-kampar.ac.id',
      name: 'Risky Ramadani',
    },
    { email: 'risma2018.tps@poltek-kampar.ac.id', name: 'Risma Wati' },
    { email: 'RisqiMaulana@poltek-kampar.ac.id', name: 'Risqi Maulana ' },
    { email: 'riswandippm@poltek-kampar.ac.id', name: 'Riswandi' },
    {
      email: 'riyadhotahiratunnisa2021.tif@students.poltek-kampar.ac.id',
      name: 'Riyadho Tahira Tunnisa',
    },
    {
      email: 'riyansyahputra2021.tps@students.poltek-kampar.ac.id',
      name: 'Riyan Syahputra',
    },
    { email: 'rizkiazizi@poltek-kampar.ac.id', name: 'Rizki Azizi' },
    {
      email: 'rizkirahmanhakim2021.tps@students.poltek-kampar.ac.id',
      name: 'Rizki Rahman Hakim',
    },
    { email: 'rizkiRamadhan@poltek-kampar.ac.id', name: 'Rizki Ramadhan' },
    { email: 'rizky2019.tif@poltek-kampar.ac.id', name: 'Rizky Putra Pratama' },
    {
      email: 'rizky2022.tpks@students.poltek-kampar.ac.id',
      name: 'Rizky Yansyah Yusuf',
    },
    {
      email: 'rizkyfirmansyah2021.tif@students.poltek-kampar.ac.id',
      name: 'Rizky Firmansyah',
    },
    {
      email: 'rizkyhikmawan2021.tps@students.poltek-kampar.ac.id',
      name: 'Rizky Hikmawan',
    },
    {
      email: 'rizkywahyu@poltek-kampar.ac.id',
      name: 'Rizky Wahyu Parmohonan Lubis',
    },
    { email: 'Roberto@poltek-kampar.ac.id', name: 'John Roberto Saputra' },
    {
      email: 'rojipramanta2021.ppm@students.poltek-kampar.ac.id',
      name: 'Roji Pramanta',
    },
    {
      email: 'roland2022.ppm@students.poltek-kampar.ac.id',
      name: 'Roland Wisnu Firmansyah Sirait',
    },
    {
      email: 'roma2022.tpks@students.poltek-kampar.ac.id',
      name: 'Roma Natalia Sinaga',
    },
    { email: 'romi@poltek-kampar.ac.id', name: 'Romiyadi, S.T., M.T.' },
    {
      email: 'romiirawan2021.tif@students.poltek-kampar.ac.id',
      name: 'Romi Irawan',
    },
    { email: 'ronitif@poltek-kampar.ac.id', name: 'Roni' },
    {
      email: 'royhariantosihombing2021.tps@students.poltek-kampar.ac.id',
      name: 'Roy Harianto Sihombing',
    },
    {
      email: 'rozik2022.tif@students.poltek-kampar.ac.id',
      name: 'Rozik Maulana',
    },
    { email: 'RyanFajar@poltek-kampar.ac.id', name: 'Ryan Fajar Rifai' },
    {
      email: 'sabiluraji2022.ppm@students.poltek-kampar.ac.id',
      name: 'Sabiluraji',
    },
    {
      email: 'safitri2022.tif@students.poltek-kampar.ac.id',
      name: 'Mardila Rizky Safitri ',
    },
    { email: 'salman@poltek-kampar.ac.id', name: 'Salman Alfarisi' },
    { email: 'salsa2019.abi@poltek-kampar.ac.id', name: 'Salsa Firdaus Putri' },
    {
      email: 'salsabila2019.tps@poltek-kampar.ac.id',
      name: 'Salsabila Kirani',
    },
    {
      email: 'salsabilahsyahdaniah2021.tif@students.poltek-kampar.ac.id',
      name: 'Salsabilah Syahdaniah BR Damanik',
    },
    {
      email: 'salsabilanovira2021.tps@students.poltek-kampar.ac.id',
      name: 'Salsabila Novira',
    },
    {
      email: 'samsulbahri2021.tps@students.poltek-kampar.ac.id',
      name: 'Samsul Bahri',
    },
    {
      email: 'samuel2019.ppm@poltek-kampar.ac.id',
      name: 'Samuel Ferdinand Simanjuntak',
    },
    {
      email: 'samuel2021.tps@students.poltek-kampar.ac.id',
      name: 'Samuel Pandapotan Nainggolan',
    },
    {
      email: 'sanda2022.tif@students.poltek-kampar.ac.id',
      name: 'Sanda Haiki',
    },
    { email: 'sandi2018.ppm@poltek-kampar.ac.id', name: 'Sandi Setiawan' },
    { email: 'sandi2019.ppm@poltek-kampar.ac.id', name: 'Sandi Eka Putra' },
    { email: 'sandika@poltek-kampar.ac.id', name: 'Sandika Apriando Halim' },
    {
      email: 'saputra2022.tps@students.poltek-kampar.ac.id',
      name: 'M. Vicki Saputra',
    },
    {
      email: 'sari2022.ppm@students.poltek-kampar.ac.id',
      name: 'Phuspita Ratna Sari',
    },
    {
      email: 'sari2022.tif@students.poltek-kampar.ac.id',
      name: 'Ayu Puspita Sari',
    },
    {
      email: 'SelfiaCarolin@poltek-kampar.ac.id',
      name: 'Selfia Carolin Pasaribu',
    },
    { email: 'sesti2018.tps@poltek-kampar.ac.id', name: 'Sesti Yopita' },
    { email: 'setia2019.ppm@poltek-kampar.ac.id', name: 'Setia Adi Wardana' },
    {
      email: 'setiawan2022.ppm@students.poltek-kampar.ac.id',
      name: 'Mohammad Rendy Setiawan',
    },
    {
      email: 'sihombing2022.tps@students.poltek-kampar.ac.id',
      name: 'Gideon Parlindungan Sihombing',
    },
    {
      email: 'siswan2019.tps@poltek-kampar.ac.id',
      name: 'Siswantomi Sidabalok',
    },
    { email: 'siti2019.tps@poltek-kampar.ac.id', name: 'Siti Armila' },
    {
      email: 'slamet@poltek-kampar.ac.id',
      name: 'Slamet Triyanto, S.ST.,MKom',
    },
    { email: 'solihin2019.ppm@poltek-kampar.ac.id', name: 'Solihin' },
    { email: 'sri2018.tps@poltek-kampar.ac.id', name: 'Sri Susanti' },
    {
      email: 'sriayuindriyani2021.tif@students.poltek-kampar.ac.id',
      name: 'Sri Ayu Indriyani',
    },
    {
      email: 'srikandi2019.tif@poltek-kampar.ac.id',
      name: 'Srikandi Khairunnisa',
    },
    {
      email: 'srioktikasyahputri@poltek-kampar.ac.id',
      name: 'Sri Oktika Syahputri, S.P., M.P',
    },
    {
      email: 'stefanus2022.ppm@students.poltek-kampar.ac.id',
      name: 'Stefanus Dicky Elson Siallagan',
    },
    {
      email: 'stefanusggirbes2021.ppm@students.poltek-kampar.ac.id',
      name: 'Stevanus G.N. Girbes',
    },
    { email: 'suci2018.abi@poltek-kampar.ac.id', name: 'Suci Rahayu' },
    {
      email: 'suci2022.tif@students.poltek-kampar.ac.id',
      name: 'Suci Wulan Dari',
    },
    { email: 'sugian2022.tps@students.poltek-kampar.ac.id', name: 'Sugian' },
    { email: 'sugiarto2018.tps@poltek-kampar.ac.id', name: 'Sugiarto' },
    { email: 'suhaili2021.ppm@students.poltek-kampar.ac.id', name: 'Suhaili' },
    { email: 'suhartono@poltek-kampar.ac.id', name: 'M. Risky Suhartono' },
    { email: 'suheri@poltek-kampar.ac.id', name: 'Suheri' },
    {
      email: 'sujarwo2022.tps@students.poltek-kampar.ac.id',
      name: 'Sujarwo Mahendro',
    },
    { email: 'sukma2019.tps@poltek-kampar.ac.id', name: 'Putri Sukma Dani' },
    { email: 'super_admin@siakad.ac.id', name: 'Super Adminitrator' },
    { email: 'supini2019.tps@poltek-kampar.ac.id', name: 'Supini Wati' },
    {
      email: 'surya202.tps@students.poltek-kampar.ac.id',
      name: 'Surya Febrianti',
    },
    {
      email: 'susianamayasari2021.abi@students.poltek-kampar.ac.id',
      name: 'Susiana Mayasari',
    },
    { email: 'susilianti@poltek-kampar.ac.id', name: 'Susilianti' },
    { email: 'susriadi2019.tif@poltek-kampar.ac.id', name: 'Susriadi' },
    { email: 'sutrisno2019.ppm@poltek-kampar.ac.id', name: 'Sutrisno' },
    { email: 'sutriyadi@poltek-kampar.ac.id', name: 'Sutriyadi' },
    { email: 'suwarno2021.tps@students.poltek-kampar.ac.id', name: 'Suwarno' },
    { email: 'syafrizaltif@poltek-kampar.ac.id', name: 'Syafrizal' },
    {
      email: 'syarwindi2021.tps@students.poltek-kampar.ac.id',
      name: 'Syarwindi',
    },
    { email: 'syawal2019.ppm@poltek-kampar.ac.id', name: 'Syawal Aidil Fikri' },
    {
      email: 'taralianaramadhaniputri2021.tif@students.poltek-kampar.ac.id',
      name: 'Tara Liana Ramadhani Putri',
    },
    { email: 'tedja2018.tps@poltek-kampar.ac.id', name: 'Tedja Hadi Pratama' },
    { email: 'tengku@poltek-kampar.ac.id', name: 'Tengku Fadlisyah' },
    {
      email: 'thohirafgani2021.ppm@students.poltek-kampar.ac.id',
      name: 'Thohir Afgani',
    },
    { email: 'tifanny2018.tps@poltek-kampar.ac.id', name: 'Tifanny Wulandari' },
    {
      email: 'tomiariskynaibaho2021.tps@students.poltek-kampar.ac.id',
      name: 'Tomi Arisky Naibaho',
    },
    { email: 'tri2018.tps@poltek-kampar.ac.id', name: 'Tri Apri Aldi' },
    {
      email: 'triaadepertiwi2021.tif@students.poltek-kampar.ac.id',
      name: 'Tria Ade Pertiwi',
    },
    {
      email: 'trikurniaty@poltek-kampar.ac.id',
      name: 'Tri Kurniaty, S.P., M.Sc',
    },
    { email: 'TriZulham@poltek-kampar.ac.id', name: 'Tri Zulham Haifani' },
    {
      email: 'tulusaldiwiguna2021.ppm@students.poltek-kampar.ac.id',
      name: 'Tulus Aldi Wiguna',
    },
    {
      email: 'tuturMulyawan@poltek-kampar.ac.id',
      name: 'Tutur Mulyawan Siregar',
    },
    { email: 'tyoga@poltek-kampar.ac.id', name: 'T.Yoga Winanda, S.E., M.M ' },
    { email: 'ucousman@poltek-kampar.ac.id', name: 'M.Rukhshah' },
    { email: 'ulfa2019.abi@poltek-kampar.ac.id', name: 'Ulfa Nur Safitri' },
    { email: 'umar@poltek-kampar.ac.id', name: 'Umar Linggom, SP' },
    {
      email: 'ummah2022.tif@students.poltek-kampar.ac.id',
      name: 'Khanifah Choirul Ummah',
    },
    { email: 'u_nie@poltek-kampar.ac.id', name: 'Sri Wahyuni, S.P., M.Si.' },
    {
      email: 'vanes2022.ppm@students.poltek-kampar.ac.id',
      name: 'Vanes Revano',
    },
    {
      email: 'videa2022.tif@students.poltek-kampar.ac.id',
      name: 'Videa Nurjanah',
    },
    {
      email: 'vinka2022.tif@students.poltek-kampar.ac.id',
      name: 'Vinka Nayla',
    },
    {
      email: 'vironica2019.tif@poltek-kampar.ac.id',
      name: 'Veronica Fitria Putri',
    },
    {
      email: 'vita2022.ppm@students.poltek-kampar.ac.id',
      name: 'Vita Febriyanti',
    },
    { email: 'wahyu2019.tif@poltek-kampar.ac.id', name: 'Wahyu Septiansyah' },
    { email: 'wahyu@poltek-kampar.ac.id', name: 'Wahyu Putra Pratama ' },
    {
      email: 'wahyuda2021.ppm@students.poltek-kampar.ac.id',
      name: 'Muhammad Wahyuda',
    },
    { email: 'wahyudiLubis@poltek-kampar.ac.id', name: 'Wahyudi Lubis' },
    {
      email: 'WahyuRamadhan@poltek-kampar.ac.id',
      name: 'Wahyu Ramadhan Syahputra',
    },
    {
      email: 'wahyuseptianingsih2021.tif@students.poltek-kampar.ac.id',
      name: 'Wahyu Septianingsih',
    },
    {
      email: 'widya_sm.dlb@poltek-kampar.ac.id',
      name: 'Widya Sinta Mustika, S.Si., M.Si.',
    },
    { email: 'wildan2018.ppm@poltek-kampar.ac.id', name: 'Wildan Akromi' },
    {
      email: 'winda2022.abi@students.poltek-kampar.ac.id',
      name: 'Winda Priyana ',
    },
    {
      email: 'winduguritno2021.tps@students.poltek-kampar.ac.id',
      name: 'Windu Guritno',
    },
    { email: 'winta2019.tif@poltek-kampar.ac.id', name: 'Winta Amalia Ayu' },
    { email: 'wiramandala@poltek-kampar.ac.id', name: 'Wira Mandala Putra' },
    { email: 'wirdatul2019.tif@poltek-kampar.ac.id', name: 'Wirdatul Jannah' },
    { email: 'wirdatul2019.tps@poltek-kampar.ac.id', name: 'Wardatul Hayani' },
    {
      email: 'wirdatul2022.abi@students.poltek-kampar.ac.id',
      name: 'Wirdatul Arfifa',
    },
    {
      email: 'witri2022.tps@students.poltek-kampar.ac.id',
      name: 'Yolla Aulia Witri',
    },
    {
      email: 'wulandari2021.tif@students.poltek-kampar.ac.id',
      name: 'Wulandari',
    },
    {
      email: 'yanarrizalnazri2021.tps@students.poltek-kampar.ac.id',
      name: 'Ryan Arrizal Nazri',
    },
    {
      email: 'yani2022.tpks@students.poltek-kampar.ac.id',
      name: 'Yani Kartika',
    },
    {
      email: 'yedisispurwanto@poltek-kampar.ac.id',
      name: 'Dr. Drs Yedi Sispurwanto, MM',
    },
    {
      email: 'yessy2022.tps@students.poltek-kampar.ac.id',
      name: 'Yessy Anzelika Br. Saragih',
    },
    {
      email: 'yetti@poltek-kampar.ac.id',
      name: 'Dzulhijjah Yetti, S.Pd., M.Pd.',
    },
    {
      email: 'yettyvianney2021.tif@students.poltek-kampar.ac.id',
      name: 'Yetty Vianney',
    },
    { email: 'yoga@poltek-kampar.ac.id', name: 'Ade Yoga Putra, ST' },
    { email: 'yogad@poltek-kampar.ac.id', name: 'Yoga Daniel Pratama Sinaga' },
    { email: 'yogi2022.abi@students.poltek-kampar.ac.id', name: 'Yogi' },
    { email: 'yogi@poltek-kampar.ac.id', name: 'Yogi Pangestu ' },
    {
      email: 'yogianggara2022.tif@students.poltek-kampar.ac.id',
      name: 'Yogi Anggara',
    },
    { email: 'yohana2019.tps@poltek-kampar.ac.id', name: 'Yohana Br Pasaribu' },
    {
      email: 'yohanaresty@poltek-kampar.ac.id',
      name: 'Yohana Resty Agatha Marpaung',
    },
    { email: 'yosua@poltek-kampar.ac.id', name: 'Yosua Elkius Nababan' },
    {
      email: 'yovita2022.ppm@students.poltek-kampar.ac.id',
      name: 'Niken Dinda Yovita',
    },
    { email: 'yuda@poltek-kampar.ac.id', name: 'Yuda Deva Gustiranda ' },
    {
      email: 'yudaanasta2022.ppm@students.poltek-kampar.ac.id',
      name: 'Yuda Anasta',
    },
    {
      email: 'yudalisyandi2021.ppm@students.poltek-kampar.ac.id',
      name: 'Yuda Lisyandi',
    },
    {
      email: 'yudapratama2022.tps@students.poltek-kampar.ac.id',
      name: 'Yuda Pratama',
    },
    {
      email: 'yudha2022.tps@students.poltek-kampar.ac.id',
      name: 'Yudha Aditya',
    },
    { email: 'yudi2019.tif@poltek-kampar.ac.id', name: 'Yudi Hamdi Utama' },
    { email: 'yudi@poltek-kampar.ac.id', name: 'Yudi Dwianda' },
    {
      email: 'yuli2019.abi@poltek-kampar.ac.id',
      name: 'Yuli Rahmadani Harahap',
    },
    { email: 'yuliani2021.abi@students.poltek-kampar.ac.id', name: 'Yuliani' },
    {
      email: 'yuliartasinaga2021.tif@students.poltek-kampar.ac.id',
      name: 'Yuli Arta Sinaga',
    },
    {
      email: 'yulius2022.tps@students.poltek-kampar.ac.id',
      name: 'Yulius Mahendra',
    },
    {
      email: 'zaibatul2019.tps@poltek-kampar.ac.id',
      name: 'Zaibatul Aslamiah',
    },
    { email: 'zainur2018.tps@poltek-kampar.ac.id', name: 'Zainur Khotib' },
    { email: 'zaki2019.tps@poltek-kampar.ac.id', name: 'Zaki Dwi Ihtada' },
    {
      email: 'zanah2022.tpks@students.poltek-kampar.ac.id',
      name: 'Trie Andi Surya Zanah',
    },
    { email: 'zeki2019.tps@poltek-kampar.ac.id', name: 'Zeki Ramanda' },
    {
      email: 'zeki2022.ppm@students.poltek-kampar.ac.id',
      name: 'Zeki Pratama',
    },
    {
      email: 'zeki2022.tpks@students.poltek-kampar.ac.id',
      name: 'Zeki Mursalim',
    },
    { email: 'zidni2019.tps@poltek-kampar.ac.id', name: 'Zidni Falah' },
    { email: 'zikri2019.tif@poltek-kampar.ac.id', name: 'Zikri Armansyah' },
    { email: 'zul2019.tps@poltek-kampar.ac.id', name: 'Zul Indra Akbar' },
    {
      email: 'zulfairi2022.tps@students.poltek-kampar.ac.id',
      name: 'Zulfairi',
    },
    { email: 'zulfikar@poltek-kampar.ac.id', name: 'Zulfikar, S.Pd., M.Kom' },
    {
      email: 'zulfikri2021.tps@students.poltek-kampar.ac.id',
      name: 'Zulfikri',
    },
    {
      email: 'zulkifli2021.tif@students.poltek-kampar.ac.id',
      name: 'Zulkifli',
    },
  ];

  const hashedUsers = await Promise.all(
    users.map(async (item, index) => {
      return {
        id: index + 1,
        name: item.name,
        email: item.email,
        password: await bcrypt.hash('123456', 10),
      };
    }),
  );

  await prisma.users.createMany({
    data: hashedUsers,
  });
}
