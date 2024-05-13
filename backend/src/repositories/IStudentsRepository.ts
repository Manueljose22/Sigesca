import { StudentRequest } from "../services/students/CreateStudentsService";




export type saveStudent {
    idAluno: string;
    enderecosId: string;
    usuarioId: string;
    responsaveisId: string;
    n_matricula: number;
    nome: string;
    data_inscricao: Date;
    documento: string;
    numero_bi: string;
    bi_validade: string;
    nacionalidade: string;
    genero: string;
    telefone: string;
    email: string;
    foto: string;
    nome_pai: string;
    nome_mae: string;
    telefonePai: string
    municipio:  string
    bairro:   string
    rua: string
    casa: string
    createdAt: Date;
    updatedAt: Date;
}

export interface IStudentsRepository {
    save(data: StudentRequest): Promise<void>
    findByNumber(n_matricula: number): Promise<saveStudent | null>
    findByName(name: string): Promise<saveStudent | null>
    findByBI(numberBI: string): Promise<saveStudent | null>
}