import { IStudentsRepository, saveStudent } from "../../repositories/IStudentsRepository";



class GetAllStundentsService {

    constructor(private studentRepository: IStudentsRepository) { }

    async execute(): Promise<saveStudent[] | null> {

        const students = await this.studentRepository.findAlls();

        return students;

    }
}

export { GetAllStundentsService }