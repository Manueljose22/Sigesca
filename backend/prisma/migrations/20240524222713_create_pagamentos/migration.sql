-- CreateTable
CREATE TABLE `Pagamentos` (
    `idPagamento` VARCHAR(191) NOT NULL,
    `aluno_id` VARCHAR(191) NULL,
    `valor` DOUBLE NOT NULL,
    `data_pagamento` DATE NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idPagamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pagamentos` ADD CONSTRAINT `Pagamentos_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `Alunos`(`idAluno`) ON DELETE SET NULL ON UPDATE CASCADE;
