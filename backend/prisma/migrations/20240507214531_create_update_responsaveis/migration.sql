/*
  Warnings:

  - You are about to drop the column `telefone` on the `responsaveis` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[telefonePai]` on the table `Responsaveis` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `telefonePai` to the `Responsaveis` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Responsaveis_telefone_key` ON `responsaveis`;

-- AlterTable
ALTER TABLE `responsaveis` DROP COLUMN `telefone`,
    ADD COLUMN `telefonePai` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Responsaveis_telefonePai_key` ON `Responsaveis`(`telefonePai`);
