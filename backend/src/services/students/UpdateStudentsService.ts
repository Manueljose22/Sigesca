import { hash } from "bcrypt";
import { IStudentsRepository, saveStudent } from "../../repositories/studants/IStudentsRepository";


class UpdateStudentsService {

    constructor(private studentRepository: IStudentsRepository) { }

    async execute(id: string, data: saveStudent): Promise<void | Error> {

        const student = await this.studentRepository.findById(id);
        let password: string;

        if (!student) {
            throw new Error('Estudante inválido!')
        }

        if (!data.senha) {
            password = student.senha;
        } else {
            password = await hash(data.senha, 12);
        }

        const dataStudent = {
            idAluno: data.idAluno ?? student.idAluno,
            n_matricula: data.n_matricula ?? student.n_matricula,
            nome: data.nome ?? student.nome,
            data_nascimento: data.data_nascimento ?? student.data_nascimento,
            documento: data.documento ?? student.documento,
            numero_bi: data.numero_bi ?? student.numero_bi,
            bi_validade: data.bi_validade ?? student.bi_validade,
            nacionalidade: data.nacionalidade ?? student.nacionalidade,
            naturalidade: data.naturalidade ?? student.nacionalidade,
            genero: data.genero ?? student.genero,
            telefone: data.telefone ?? student.telefone,
            email: data.email ?? student.email,
            foto: data.foto ?? student.foto,
            nome_pai: data.nome_pai ?? student.nome_pai,
            nome_mae: data.nome_mae ?? student.nome_mae,
            pdc: data.pdc ?? student.pdc,
            municipio: data.municipio ?? student.municipio,
            bairro: data.bairro ?? student.bairro,
            rua: data.rua ?? student.rua,
            casa: data.casa ?? student.casa,
            senha: password,
            telefoneResponsavel: data.telefoneResponsavel ?? data.telefoneResponsavel,
            responsaveisId: data.responsaveisId ?? student.responsaveisId,
            enderecosId: data.enderecosId ?? student.enderecosId,
        }

        await this.studentRepository.update(id, dataStudent);
    }
}

export { UpdateStudentsService }