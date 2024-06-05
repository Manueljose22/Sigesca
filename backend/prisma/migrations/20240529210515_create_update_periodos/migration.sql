/*
  Warnings:

  - Added the required column `ano` to the `Periodo_letivo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `periodo_letivo` ADD COLUMN `ano` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` BOOLEAN NOT NULL DEFAULT false;
