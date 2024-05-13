/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `alunos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `alunos` DROP FOREIGN KEY `Alunos_usuarioId_fkey`;

-- DropForeignKey
ALTER TABLE `professores` DROP FOREIGN KEY `Professores_usuarioId_fkey`;

-- AlterTable
ALTER TABLE `alunos` DROP COLUMN `usuarioId`;
