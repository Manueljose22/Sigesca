import { IStudentsRepository } from '../../repositories/IStudentsRepository';



export type StudentRequest = {
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
    
}

class CreateStudentsService {

    constructor(private studentRepository: IStudentsRepository) { }

    async execute(data: StudentRequest): Promise<void | Error> {

        data.n_matricula = this.geratorNumber();

        // const studentExists = await this.studentRepository.findByMatricula(data.n_matricula);

        if (studentExists) {
            return new Error('Estudante já existe!')
        }

        if (!data.bi_validade || !data.data_inscricao || !data.email ||
            !data.genero || !data.nacionalidade
            || !data.nome || !data.numero_bi || !data.telefone) {

            return new Error('Por favor, preencha todos os campos!')

        }

        console.log(data.foto);
        

        // await this.studentRepository.save(data);

    }

    private geratorNumber(): number {
        
        return Number(new Date().getFullYear() + '' + Math.floor(Math.random() * 9999) + 1);
    }
}

export { CreateStudentsService }