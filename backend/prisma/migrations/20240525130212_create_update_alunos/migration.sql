/*
  Warnings:

  - Added the required column `data_nascimento` to the `Alunos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alunos` ADD COLUMN `data_nascimento` VARCHAR(191) NOT NULL;
