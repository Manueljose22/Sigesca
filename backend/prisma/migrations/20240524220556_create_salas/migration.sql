-- CreateTable
CREATE TABLE `Salas` (
    `idSala` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `capacidadeAlunos` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idSala`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;