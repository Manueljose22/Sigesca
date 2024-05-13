// import { IStudentRepository, StundentSave } from "../../repositories/IStudentsRepository";



// class GetStundentsService {

//     constructor(private studentRepository: IStudentRepository) { }

//     async execute(id: string): Promise<StundentSave | Error> {

//         const student = await this.studentRepository.findById(id);

//         if (!student) {
//             return new Error('Estudante inválido!');
//         }

//         return student

//     }
// }

// export { GetStundentsService }