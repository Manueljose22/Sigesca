import { Sessao } from "@prisma/client";



export type saveSession = {
    idUsuario   :string;
    codigo      :number;
    senha       :string;
    nivelAcesso :string;
    alunoId: string;
    professorId: string;
}

export interface ISessionRepository {
    findAccessCode(codigo: number): Promise <saveSession | null>
}