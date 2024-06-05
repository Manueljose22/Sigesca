import { Aluno } from "@prisma/client";
import { StudentRequest } from "../services/students/CreateStudentsService";




// export { Aluno as saveStudent}

export type saveStudent = {
    idAluno: string;
    n_matricula: number;
    nome: string;
    documento: string;
    numero_bi: string;
    data_nascimento: string;
    bi_validade: string;
    nacionalidade: string;
    naturalidade: string;
    pdc: string;
    genero: string;
    telefone: string;
    email: string;
    foto: string;
    nome_pai: string;
    nome_mae: string;
    telefoneResponsavel: string
    municipio:  string
    bairro:   string
    rua: string
    casa: string
    senha: string;
    responsaveisId: string;
    enderecosId: string;
}



export interface IStudentsRepository {
    save(data: StudentRequest): Promise<void>
    findByNumber(n_matricula: number): Promise<saveStudent | null>
    findByName(name: string): Promise<saveStudent[] | null>
    findById(id: string): Promise<saveStudent | null>
    findByBI(numberBI: string): Promise<saveStudent | null>
    findAlls(): Promise<saveStudent[] | null>
    update(id: string, data: saveStudent): Promise<void>
    delete(id: string): Promise<void>
}