import { ILevelRepository, levelSave } from "../../repositories/level/ILevelRepository";




class GetLevelByIdService {

    constructor(private ILevelRepository: ILevelRepository) { }

    async execute(id: string): Promise<levelSave | null> {

        const levels = await this.ILevelRepository.findById(id);

        return levels;
    }
}

export { GetLevelByIdService };