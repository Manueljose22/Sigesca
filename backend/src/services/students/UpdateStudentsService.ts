// import { IStudentRepository, StundentSave} from "../../repositories/IStudentsRepository";


// class UpdateStudentsService {

//     constructor(private studentRepository: IStudentRepository) { }

//     async execute(id: string, data: StundentSave): Promise<void | Error>{

//         const student = await this.studentRepository.findById(id);

//         if (!student) {
//             return new Error('Estudante inválido!')
//         }

//         const dataStudent = {
//             n_matricula:    data.n_matricula ?? student.n_matricula, 
//             nome:           data.nome ?? student.nome,         
//             data_inscricao: data.data_inscricao ?? student.data_inscricao,
//             documento:      data.documento ?? student.documento,
//             numero_bi:      data.numero_bi ?? student.numero_bi,
//             bi_validade:    data.bi_validade ?? student.bi_validade,
//             nacionalidade:  data.nacionalidade ?? student.nacionalidade,
//             genero:         data.genero ?? student.genero,
//             telefone:       data.telefone ?? student.telefone,
//             email:          data.email ?? student.email,
//             foto:           data.foto ?? student.foto,
//             responsaveisId: data.responsaveisId ?? student.responsaveisId,
//             enderecosId:    data.enderecosId ?? student.enderecosId,
//             createdAt:      data.createdAt,    
//             updatedAt:      new Date()
//         }

//         await this.studentRepository.update(dataStudent);
//     }
// }

// export { UpdateStudentsService }