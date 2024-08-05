/*
  Warnings:

  - The primary key for the `periodo_letivo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ano` on the `periodo_letivo` table. All the data in the column will be lost.
  - You are about to drop the column `data_fim` on the `periodo_letivo` table. All the data in the column will be lost.
  - You are about to drop the column `data_inicio` on the `periodo_letivo` table. All the data in the column will be lost.
  - You are about to drop the column `idPeriodo` on the `periodo_letivo` table. All the data in the column will be lost.
  - Added the required column `dateEnd` to the `Periodo_letivo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateStart` to the `Periodo_letivo` table without a default value. This is not possible if the table is not empty.
  - The required column `idPeriod` was added to the `Periodo_letivo` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `year` to the `Periodo_letivo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `matriculas` DROP FOREIGN KEY `Matriculas_periodo_letivo_id_fkey`;

-- DropForeignKey
ALTER TABLE `turmas` DROP FOREIGN KEY `Turmas_periodo_letivo_id_fkey`;

-- AlterTable
ALTER TABLE `periodo_letivo` DROP PRIMARY KEY,
    DROP COLUMN `ano`,
    DROP COLUMN `data_fim`,
    DROP COLUMN `data_inicio`,
    DROP COLUMN `idPeriodo`,
    ADD COLUMN `dateEnd` DATE NOT NULL,
    ADD COLUMN `dateStart` DATE NOT NULL,
    ADD COLUMN `idPeriod` VARCHAR(191) NOT NULL,
    ADD COLUMN `year` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`idPeriod`);

-- AddForeignKey
ALTER TABLE `Turmas` ADD CONSTRAINT `Turmas_periodo_letivo_id_fkey` FOREIGN KEY (`periodo_letivo_id`) REFERENCES `Periodo_letivo`(`idPeriod`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matriculas` ADD CONSTRAINT `Matriculas_periodo_letivo_id_fkey` FOREIGN KEY (`periodo_letivo_id`) REFERENCES `Periodo_letivo`(`idPeriod`) ON DELETE SET NULL ON UPDATE CASCADE;
