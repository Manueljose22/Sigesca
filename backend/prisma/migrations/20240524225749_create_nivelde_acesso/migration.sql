/*
  Warnings:

  - The values [stundent] on the enum `Sessoes_nivelAcesso` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `sessoes` MODIFY `nivelAcesso` ENUM('admin', 'student', 'teacher') NOT NULL DEFAULT 'admin';
