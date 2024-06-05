-- CreateTable
CREATE TABLE `DiscProfessores` (
    `id` VARCHAR(191) NOT NULL,
    `professor_id` VARCHAR(191) NULL,
    `disciplina_id` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `DiscProfessores` ADD CONSTRAINT `DiscProfessores_professor_id_fkey` FOREIGN KEY (`professor_id`) REFERENCES `Professores`(`idProfessor`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DiscProfessores` ADD CONSTRAINT `DiscProfessores_disciplina_id_fkey` FOREIGN KEY (`disciplina_id`) REFERENCES `Disciplinas`(`idDisciplina`) ON DELETE SET NULL ON UPDATE CASCADE;
