-- CreateTable
CREATE TABLE `Enderecos` (
    `idEndereco` VARCHAR(191) NOT NULL,
    `municipio` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `rua` VARCHAR(191) NOT NULL,
    `casa` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idEndereco`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
