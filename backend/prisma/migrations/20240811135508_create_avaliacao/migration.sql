-- CreateTable
CREATE TABLE `Avaliacoes` (
    `idAvaliacao` VARCHAR(191) NOT NULL,
    `nota_1` DOUBLE NOT NULL,
    `nota_2` DOUBLE NOT NULL,
    `nota_3` DOUBLE NOT NULL,
    `exame` DOUBLE NOT NULL,
    `recurso` DOUBLE NOT NULL,
    `mediaFinal` DOUBLE NOT NULL,
    `aluno_id` VARCHAR(191) NULL,
    `disciplina_id` VARCHAR(191) NULL,
    `turma_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idAvaliacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Avaliacoes` ADD CONSTRAINT `Avaliacoes_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `Alunos`(`idAluno`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avaliacoes` ADD CONSTRAINT `Avaliacoes_disciplina_id_fkey` FOREIGN KEY (`disciplina_id`) REFERENCES `Disciplinas`(`idDisciplina`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avaliacoes` ADD CONSTRAINT `Avaliacoes_turma_id_fkey` FOREIGN KEY (`turma_id`) REFERENCES `Turmas`(`idTurma`) ON DELETE SET NULL ON UPDATE CASCADE;
