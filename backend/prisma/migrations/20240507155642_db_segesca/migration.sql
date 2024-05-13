-- CreateTable
CREATE TABLE `Usuarios` (
    `idUsuario` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `role` ENUM('admin', 'stundent', 'teacher') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Usuarios_email_key`(`email`),
    PRIMARY KEY (`idUsuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alunos` (
    `idAluno` VARCHAR(191) NOT NULL,
    `enderecosId` VARCHAR(191) NOT NULL,
    `usuarioId` VARCHAR(191) NOT NULL,
    `responsaveisId` VARCHAR(191) NOT NULL,
    `n_matricula` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `data_inscricao` DATE NOT NULL,
    `documento` VARCHAR(191) NOT NULL,
    `numero_bi` VARCHAR(191) NOT NULL,
    `bi_validade` VARCHAR(191) NOT NULL,
    `nacionalidade` VARCHAR(191) NOT NULL,
    `genero` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Alunos_enderecosId_key`(`enderecosId`),
    UNIQUE INDEX `Alunos_usuarioId_key`(`usuarioId`),
    UNIQUE INDEX `Alunos_responsaveisId_key`(`responsaveisId`),
    UNIQUE INDEX `Alunos_n_matricula_key`(`n_matricula`),
    UNIQUE INDEX `Alunos_numero_bi_key`(`numero_bi`),
    UNIQUE INDEX `Alunos_email_key`(`email`),
    PRIMARY KEY (`idAluno`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Responsaveis` (
    `idResponsavel` VARCHAR(191) NOT NULL,
    `enderecosId` VARCHAR(191) NOT NULL,
    `nome_pai` VARCHAR(191) NOT NULL,
    `nome_mae` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Responsaveis_enderecosId_key`(`enderecosId`),
    UNIQUE INDEX `Responsaveis_telefone_key`(`telefone`),
    PRIMARY KEY (`idResponsavel`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enderecos` (
    `idEndereco` VARCHAR(191) NOT NULL,
    `municipio` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `rua` VARCHAR(191) NOT NULL,
    `casa` VARCHAR(191) NOT NULL,
    `created_At` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_At` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idEndereco`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cursos` (
    `idCurso` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idCurso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Epocas` (
    `idEpoca` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idEpoca`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Disciplinas` (
    `idDisciplina` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idDisciplina`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Níveis_Acedemicos` (
    `idNivel` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idNivel`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Turmas` (
    `idTurma` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cursosId` VARCHAR(191) NULL,
    `niveisId` VARCHAR(191) NULL,
    `epocasId` VARCHAR(191) NULL,
    `data_inicio` DATETIME(3) NOT NULL,
    `data_fim` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idTurma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AlunoTurmas` (
    `idAluno_turma` VARCHAR(191) NOT NULL,
    `alunosId` VARCHAR(191) NULL,
    `turmasId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idAluno_turma`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Professores` (
    `idProfessor` VARCHAR(191) NOT NULL,
    `usuarioId` VARCHAR(191) NOT NULL,
    `enderecosId` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `formacao` VARCHAR(191) NOT NULL,
    `nivel` VARCHAR(191) NOT NULL,
    `numero_bi` VARCHAR(191) NOT NULL,
    `validade_bi` VARCHAR(191) NOT NULL,
    `Documento` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `salario` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Professores_usuarioId_key`(`usuarioId`),
    UNIQUE INDEX `Professores_enderecosId_key`(`enderecosId`),
    UNIQUE INDEX `Professores_numero_bi_key`(`numero_bi`),
    UNIQUE INDEX `Professores_telefone_key`(`telefone`),
    UNIQUE INDEX `Professores_email_key`(`email`),
    PRIMARY KEY (`idProfessor`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DiscProfessores` (
    `id` VARCHAR(191) NOT NULL,
    `professoresId` VARCHAR(191) NULL,
    `disciplinasId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Avaliacoes` (
    `idAvaliacao` VARCHAR(191) NOT NULL,
    `parcelar1` DOUBLE NOT NULL,
    `parcelar2` DOUBLE NOT NULL,
    `parcelar3` DOUBLE NOT NULL,
    `recurso` DOUBLE NOT NULL,
    `mediaFinal` DOUBLE NOT NULL,
    `alunosId` VARCHAR(191) NULL,
    `disciplinasId` VARCHAR(191) NULL,
    `turmasId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`idAvaliacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pagamentos` (
    `idPagamento` VARCHAR(191) NOT NULL,
    `data_validade` DATETIME(3) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `alunosId` VARCHAR(191) NULL,

    PRIMARY KEY (`idPagamento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Matriculas` (
    `idMatricula` VARCHAR(191) NOT NULL,
    `n_matricula` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `tipo` ENUM('Novo', 'Confirmacao', 'Transferencia') NOT NULL,
    `data_matricula` DATETIME(3) NOT NULL,
    `ano_academico` DATE NOT NULL,
    `periodo` VARCHAR(191) NOT NULL,
    `recibo_pagamento` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `alunosId` VARCHAR(191) NULL,

    UNIQUE INDEX `Matriculas_n_matricula_key`(`n_matricula`),
    UNIQUE INDEX `Matriculas_recibo_pagamento_key`(`recibo_pagamento`),
    PRIMARY KEY (`idMatricula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Alunos` ADD CONSTRAINT `Alunos_responsaveisId_fkey` FOREIGN KEY (`responsaveisId`) REFERENCES `Responsaveis`(`idResponsavel`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alunos` ADD CONSTRAINT `Alunos_enderecosId_fkey` FOREIGN KEY (`enderecosId`) REFERENCES `Enderecos`(`idEndereco`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alunos` ADD CONSTRAINT `Alunos_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuarios`(`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Responsaveis` ADD CONSTRAINT `Responsaveis_enderecosId_fkey` FOREIGN KEY (`enderecosId`) REFERENCES `Enderecos`(`idEndereco`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turmas` ADD CONSTRAINT `Turmas_cursosId_fkey` FOREIGN KEY (`cursosId`) REFERENCES `Cursos`(`idCurso`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turmas` ADD CONSTRAINT `Turmas_niveisId_fkey` FOREIGN KEY (`niveisId`) REFERENCES `Níveis_Acedemicos`(`idNivel`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turmas` ADD CONSTRAINT `Turmas_epocasId_fkey` FOREIGN KEY (`epocasId`) REFERENCES `Epocas`(`idEpoca`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlunoTurmas` ADD CONSTRAINT `AlunoTurmas_alunosId_fkey` FOREIGN KEY (`alunosId`) REFERENCES `Alunos`(`idAluno`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AlunoTurmas` ADD CONSTRAINT `AlunoTurmas_turmasId_fkey` FOREIGN KEY (`turmasId`) REFERENCES `Turmas`(`idTurma`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Professores` ADD CONSTRAINT `Professores_enderecosId_fkey` FOREIGN KEY (`enderecosId`) REFERENCES `Enderecos`(`idEndereco`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Professores` ADD CONSTRAINT `Professores_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuarios`(`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DiscProfessores` ADD CONSTRAINT `DiscProfessores_professoresId_fkey` FOREIGN KEY (`professoresId`) REFERENCES `Professores`(`idProfessor`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DiscProfessores` ADD CONSTRAINT `DiscProfessores_disciplinasId_fkey` FOREIGN KEY (`disciplinasId`) REFERENCES `Disciplinas`(`idDisciplina`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avaliacoes` ADD CONSTRAINT `Avaliacoes_alunosId_fkey` FOREIGN KEY (`alunosId`) REFERENCES `Alunos`(`idAluno`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avaliacoes` ADD CONSTRAINT `Avaliacoes_disciplinasId_fkey` FOREIGN KEY (`disciplinasId`) REFERENCES `Disciplinas`(`idDisciplina`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avaliacoes` ADD CONSTRAINT `Avaliacoes_turmasId_fkey` FOREIGN KEY (`turmasId`) REFERENCES `Turmas`(`idTurma`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pagamentos` ADD CONSTRAINT `Pagamentos_alunosId_fkey` FOREIGN KEY (`alunosId`) REFERENCES `Alunos`(`idAluno`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matriculas` ADD CONSTRAINT `Matriculas_alunosId_fkey` FOREIGN KEY (`alunosId`) REFERENCES `Alunos`(`idAluno`) ON DELETE SET NULL ON UPDATE CASCADE;
