/*
  Warnings:

  - You are about to alter the column `kode_prodi` on the `mahasiswa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `Int`.
  - You are about to alter the column `kelas_id` on the `mahasiswa` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `Int`.
  - A unique constraint covering the columns `[kode_prodi]` on the table `prodi` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `mahasiswa` MODIFY `kode_prodi` INTEGER NOT NULL,
    MODIFY `kelas_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sekolah` ADD COLUMN `namaKepsek` VARCHAR(100) NULL;

-- CreateTable
CREATE TABLE `role_users` (
    `id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `role` ENUM('ADMIN', 'MAHASISWA') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `prodi_kode_prodi_key` ON `prodi`(`kode_prodi`);

-- AddForeignKey
ALTER TABLE `mahasiswa` ADD CONSTRAINT `mahasiswa_kelas_id_fkey` FOREIGN KEY (`kelas_id`) REFERENCES `kelas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mahasiswa` ADD CONSTRAINT `mahasiswa_kode_prodi_fkey` FOREIGN KEY (`kode_prodi`) REFERENCES `prodi`(`kode_prodi`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_users` ADD CONSTRAINT `role_users_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
