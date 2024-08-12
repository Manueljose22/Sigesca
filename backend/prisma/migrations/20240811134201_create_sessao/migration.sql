-- CreateTable
CREATE TABLE `Sessoes` (
    `idUsuario` VARCHAR(191) NOT NULL,
    `codigo` INTEGER NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `nivelAcesso` ENUM('admin', 'student', 'teacher') NOT NULL DEFAULT 'admin',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `professor_id` VARCHAR(191) NULL,
    `aluno_id` VARCHAR(191) NULL,

    UNIQUE INDEX `Sessoes_codigo_key`(`codigo`),
    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Sessoes` ADD CONSTRAINT `Sessoes_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `Alunos`(`idAluno`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sessoes` ADD CONSTRAINT `Sessoes_professor_id_fkey` FOREIGN KEY (`professor_id`) REFERENCES `Professores`(`idProfessor`) ON DELETE CASCADE ON UPDATE CASCADE;
