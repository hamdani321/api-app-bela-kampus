-- CreateTable
CREATE TABLE `mahasiswa` (
    `id` INTEGER NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `nim` VARCHAR(100) NOT NULL,
    `kode_prodi` VARCHAR(100) NOT NULL,
    `kelas_id` VARCHAR(100) NOT NULL,
    `jenis_kelamin` ENUM('LAKI_LAKI', 'PEREMPUAN') NOT NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `portal` (
    `id` INTEGER NOT NULL,
    `tahun_ajaran_id` INTEGER NOT NULL,
    `waktu_mulai` DATETIME(3) NOT NULL,
    `waktu_selesai` DATETIME(3) NOT NULL,
    `status` ENUM('AKTIF', 'NONAKTIF') NOT NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kelas` (
    `id` INTEGER NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `prodi_id` VARCHAR(100) NOT NULL,
    `dosen_id` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prodi` (
    `id` INTEGER NOT NULL,
    `kode_prodi` INTEGER NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `singkatan` VARCHAR(100) NOT NULL,
    `jenjang` VARCHAR(100) NOT NULL,
    `kaprodi` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `registrasi` (
    `id` INTEGER NOT NULL,
    `portal_id` INTEGER NOT NULL,
    `sekolah_id` INTEGER NOT NULL,
    `nim_mahasiswa` INTEGER NOT NULL,
    `tipe` ENUM('INDIVIDU', 'KELOMPOK') NOT NULL,
    `status` ENUM('Pending', 'Approve') NOT NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `registrasi_anggota` (
    `id` INTEGER NOT NULL,
    `registrasi_id` INTEGER NOT NULL,
    `portal_id` INTEGER NOT NULL,
    `nim_mahasiswa` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `report_kegiatan` (
    `id` INTEGER NOT NULL,
    `registrasi_id` INTEGER NOT NULL,
    `nim_mahasiswa` INTEGER NOT NULL,
    `nama_pic` VARCHAR(100) NOT NULL,
    `nomor_hp_pic` VARCHAR(100) NOT NULL,
    `foto` VARCHAR(100) NOT NULL,
    `video` VARCHAR(100) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sekolah` (
    `id` INTEGER NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `alamat` VARCHAR(100) NOT NULL,
    `telepon` VARCHAR(100) NOT NULL,
    `latitude` VARCHAR(100) NOT NULL,
    `longitude` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tahun_ajaran` (
    `id` INTEGER NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `tahun` INTEGER NOT NULL DEFAULT 0,
    `jenis` ENUM('Ganjil', 'Genap') NOT NULL,
    `createdAt` DATETIME(3) NULL,
    `updatedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
