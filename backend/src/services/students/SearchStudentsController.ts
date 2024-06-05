import { IStudentsRepository, saveStudent } from "../../repositories/IStudentsRepository";



class SearchStudentsSevice {

    constructor(private studentRepository: IStudentsRepository) { }

    async execute(name: string): Promise<saveStudent[] | Error> {

        const student = await this.studentRepository.findByName(name);

        if (!student) {
            throw new Error('Estudante inválido!');
        }

        return student;

    }
}

export { SearchStudentsSevice };