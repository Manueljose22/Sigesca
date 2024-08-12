-- CreateTable
CREATE TABLE `Alunos` (
    `idAluno` VARCHAR(191) NOT NULL,
    `n_matricula` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `bi` VARCHAR(191) NOT NULL,
    `bi_validade` VARCHAR(191) NOT NULL,
    `data_nascimento` VARCHAR(191) NOT NULL,
    `nacionalidade` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `pdc` VARCHAR(191) NOT NULL,
    `endereco_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Alunos_n_matricula_key`(`n_matricula`),
    UNIQUE INDEX `Alunos_email_key`(`email`),
    UNIQUE INDEX `Alunos_bi_key`(`bi`),
    UNIQUE INDEX `Alunos_endereco_id_key`(`endereco_id`),
    PRIMARY KEY (`idAluno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Alunos` ADD CONSTRAINT `Alunos_endereco_id_fkey` FOREIGN KEY (`endereco_id`) REFERENCES `Enderecos`(`idEndereco`) ON DELETE RESTRICT ON UPDATE CASCADE;
