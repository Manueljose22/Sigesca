-- CreateTable
CREATE TABLE `Turmas` (
    `idTurma` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `turno` ENUM('Manha', 'Tarde', 'Noite') NOT NULL,
    `curso_id` VARCHAR(191) NULL,
    `niveil_id` VARCHAR(191) NULL,
    `sala_id` VARCHAR(191) NULL,
    `periodo_letivo_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idTurma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Turmas` ADD CONSTRAINT `Turmas_curso_id_fkey` FOREIGN KEY (`curso_id`) REFERENCES `Cursos`(`idCurso`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turmas` ADD CONSTRAINT `Turmas_niveil_id_fkey` FOREIGN KEY (`niveil_id`) REFERENCES `Níveis_Acedemicos`(`idNivel`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turmas` ADD CONSTRAINT `Turmas_sala_id_fkey` FOREIGN KEY (`sala_id`) REFERENCES `Salas`(`idSala`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turmas` ADD CONSTRAINT `Turmas_periodo_letivo_id_fkey` FOREIGN KEY (`periodo_letivo_id`) REFERENCES `Periodo_letivo`(`idPeriod`) ON DELETE SET NULL ON UPDATE CASCADE;
