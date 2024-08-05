import { ILevelRepository, levelRequest } from "../../repositories/level/ILevelRepository";




class CreateLevelService {

    constructor(private ILevelRepository: ILevelRepository) { }

    async execute({ name }: levelRequest): Promise<void | Error> {

        const level = await this.ILevelRepository.findByLevel(name);

        if (level) {
            throw new Error('Nível já existe!');
        }

        if (!name) {

            throw new Error('Por favor, preecha todos os campos!')
        }

        await this.ILevelRepository.save({ name });
    }
}

export { CreateLevelService };