

export type saveSession = {
    idUsuario:  string;
    codigo:     number;
    senha:      string;
    nivelAcesso:string;
    alunoId: string | null;
    professorId: string | null;
}

export interface ISessionRepository {
    findAccessCode(codigo: number): Promise <saveSession | null>
}