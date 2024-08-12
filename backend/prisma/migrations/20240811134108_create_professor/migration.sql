-- CreateTable
CREATE TABLE `Professores` (
    `idProfessor` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `formacao` VARCHAR(191) NOT NULL,
    `bi` VARCHAR(191) NOT NULL,
    `validade_bi` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `pdc` VARCHAR(191) NOT NULL,
    `endereco_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Professores_bi_key`(`bi`),
    UNIQUE INDEX `Professores_telefone_key`(`telefone`),
    UNIQUE INDEX `Professores_email_key`(`email`),
    UNIQUE INDEX `Professores_endereco_id_key`(`endereco_id`),
    PRIMARY KEY (`idProfessor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Professores` ADD CONSTRAINT `Professores_endereco_id_fkey` FOREIGN KEY (`endereco_id`) REFERENCES `Enderecos`(`idEndereco`) ON DELETE CASCADE ON UPDATE CASCADE;
