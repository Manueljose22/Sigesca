-- CreateTable
CREATE TABLE `Periodo_letivo` (
    `idPeriod` VARCHAR(191) NOT NULL,
    `year` VARCHAR(191) NOT NULL,
    `dateStart` DATE NOT NULL,
    `dateEnd` DATE NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idPeriod`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
