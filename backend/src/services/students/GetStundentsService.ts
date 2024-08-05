import { IStudentsRepository, saveStudent } from "../../repositories/studants/IStudentsRepository";



class GetStundentsService {

    constructor(private studentRepository: IStudentsRepository) { }

    async execute(id: string): Promise<saveStudent | Error> {

        const student = await this.studentRepository.findById(id);

        if (!student) {
            throw new Error('Estudante inválido!');
        }

        return student

    }
}

export { GetStundentsService }