import { hash } from "bcrypt";
import { IStudentsRepository, saveStudent } from "../../repositories/studants/IStudentsRepository";
import { StudentRequest } from "./CreateStudentsService";


class UpdateStudentsService {

    constructor(private studentRepository: IStudentsRepository) { }

    async execute(id: string, data: StudentRequest): Promise<void | Error> {

        const student = await this.studentRepository.findById(id);
        let password: string;

        if (!student) {
            throw new Error('Estudante inválido!')
        }

        if (!data.senha) {
            password = student.Sessao[0].senha;
        } else {
            password = await hash(data.senha, 12);
        }

        
        const dataStudent = {
            idAluno: id ?? student.idAluno,
            n_matricula: data.n_matricula ?? student.n_matricula,
            nome: data.nome ?? student.nome,
            data_nascimento: data.data_nascimento ?? student.data_nascimento,
            bi: data.bi ?? student.bi,
            bi_validade: data.bi_validade ?? student.bi_validade,
            nacionalidade: data.nacionalidade ?? student.nacionalidade,
            genero: data.genero ?? student.genero,
            telefone: data.telefone ?? student.telefone,
            email: data.email ?? student.email,
            foto: data.foto ?? student.foto,
            pdc: data.pdc ?? student.pdc,
            municipio: data.municipio ?? student.Endereco?.municipio,
            bairro: data.bairro ?? student.Endereco?.bairro,
            rua: data.rua ?? student.Endereco?.rua,
            casa: data.casa ?? student.Endereco?.casa,
            senha: password,
            idEndereco: student.Endereco?.idEndereco
        }

      
       await this.studentRepository.update(id, dataStudent);
    }
}

export { UpdateStudentsService }