-- CreateTable
CREATE TABLE `Responsaveis` (
    `idResponsavel` VARCHAR(191) NOT NULL,
    `nome_pai` VARCHAR(191) NOT NULL,
    `nome_mae` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `endereco_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Responsaveis_telefone_key`(`telefone`),
    UNIQUE INDEX `Responsaveis_endereco_id_key`(`endereco_id`),
    PRIMARY KEY (`idResponsavel`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Responsaveis` ADD CONSTRAINT `Responsaveis_endereco_id_fkey` FOREIGN KEY (`endereco_id`) REFERENCES `Enderecos`(`idEndereco`) ON DELETE CASCADE ON UPDATE CASCADE;
