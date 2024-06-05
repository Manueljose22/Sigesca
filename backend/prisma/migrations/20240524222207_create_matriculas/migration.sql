-- CreateTable
CREATE TABLE `Matriculas` (
    `idMatricula` VARCHAR(191) NOT NULL,
    `aluno_id` VARCHAR(191) NULL,
    `turma_id` VARCHAR(191) NULL,
    `periodo_letivo_id` VARCHAR(191) NULL,
    `tipo` ENUM('Novo', 'Confirmacao', 'Transferencia') NOT NULL DEFAULT 'Novo',
    `data_matricula` DATETIME(3) NOT NULL,
    `recibo_pagamento` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Matriculas_recibo_pagamento_key`(`recibo_pagamento`),
    PRIMARY KEY (`idMatricula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Matriculas` ADD CONSTRAINT `Matriculas_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `Alunos`(`idAluno`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matriculas` ADD CONSTRAINT `Matriculas_turma_id_fkey` FOREIGN KEY (`turma_id`) REFERENCES `Turmas`(`idTurma`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matriculas` ADD CONSTRAINT `Matriculas_periodo_letivo_id_fkey` FOREIGN KEY (`periodo_letivo_id`) REFERENCES `Periodo_letivo`(`idPeriodo`) ON DELETE SET NULL ON UPDATE CASCADE;
