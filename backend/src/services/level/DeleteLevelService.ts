import { ILevelRepository } from "../../repositories/level/ILevelRepository";



class DeleteLevelService {

    constructor(private ILevelRepository: ILevelRepository) { }

    async execute(id: string): Promise<void | Error> {

        const room = await this.ILevelRepository.findById(id);

        if (!room) {
            throw new Error('Nível inválida!')
        }

        await this.ILevelRepository.delete(id);
    }
}

export { DeleteLevelService };