import { hash } from 'bcrypt';
import { IStudentsRepository } from '../../repositories/studants/IStudentsRepository';



export type StudentRequest = {
    n_matricula: number;
    nome: string;
    bi: string;
    bi_validade: string;
    nacionalidade: string;
    data_nascimento: string;
    pdc: string;
    genero: string;
    senha: string;
    telefone: string;
    email: string;
    foto: string;
    municipio:  string
    bairro:   string
    rua: string
    casa: string
    idEndereco?: string;
}

class CreateStudentsService {

    constructor(private studentRepository: IStudentsRepository) { }

    async execute(data: StudentRequest): Promise<void | Error> {

        data.n_matricula = this.geratorNumber();

        const studentExists = await this.studentRepository.findByBI(data.bi);

        if (studentExists) {
            throw new Error('Estudante já existe!')
        }

        const passHash = await hash('sigesca', 12);
        data.senha = passHash;

        await this.studentRepository.save(data);

    }

    private geratorNumber(): number {
        
        return Number(new Date().getFullYear() + '' + Math.floor(Math.random() * 999) + 1);
    }
}

export { CreateStudentsService }