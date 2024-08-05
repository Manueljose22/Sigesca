import { ILevelRepository, levelRequest } from "../../repositories/level/ILevelRepository";






class UpdateLevelService {

    constructor(private ILevelRepository: ILevelRepository) { }

    async execute(id: string, { name }: levelRequest): Promise<void | Error> {

        const level = await this.ILevelRepository.findById(id);

        if (!level) {
            throw new Error('Nível inválido!');
        }

        await this.ILevelRepository.update(id, { name })
    }
}

export { UpdateLevelService };