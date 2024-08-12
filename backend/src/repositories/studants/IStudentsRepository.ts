import { StudentRequest } from "../../services/students/CreateStudentsService";




// export type saveStudent = {
//     idAluno: string;
//     n_matricula: number;
//     nome: string;
//     bi: string;
//     bi_validade: string;
//     data_nascimento: string;
//     nacionalidade: string;
//     pdc: string;
//     genero: string;
//     telefone: string;
//     email: string;
//     foto: string;
//     municipio:  string
//     bairro:   string
//     rua: string
//     casa: string
//     senha: string;
//     enderecosId: string;
// }

export type saveStudent = {
    idAluno: string;
    n_matricula: number;
    nome: string;
    bi: string;
    bi_validade: string;
    data_nascimento: string;
    nacionalidade: string;
    pdc: string;
    genero: string;
    telefone: string;
    email: string;
    foto: string | null;
    enderecosId: string | null;
    Endereco: {
        idEndereco: string;
        municipio: string;
        bairro: string;
        rua: string;
        casa: string;
    } | null;
    Sessao: {
        codigo: number;
        senha: string;
    }[];
}





export interface IStudentsRepository {
    save(data: StudentRequest): Promise<void>
    findByNumber(n_matricula: number): Promise<saveStudent | null>
    findByName(name: string): Promise<saveStudent[] | null>
    findById(id: string): Promise<saveStudent | null>
    findByBI(numberBI: string): Promise<saveStudent | null>
    findAlls(): Promise<saveStudent[] | null>
    update(id: string, data: StudentRequest): Promise<void>
    delete(id: string): Promise<void>
}