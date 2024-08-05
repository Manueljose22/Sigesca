import { IStudentsRepository } from "../../repositories/studants/IStudentsRepository";



class DeleteStudentsservice {

    constructor(private studentRepository: IStudentsRepository) { }

    async execute(id: string): Promise<Error | void> {

        const student = await this.studentRepository.findById(id);

        if (!student) {
            throw new Error('Estudante não existe!');
        }

        await this.studentRepository.delete(id);
    }
}

export { DeleteStudentsservice };