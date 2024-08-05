import { ILevelRepository, levelSave } from "../../repositories/level/ILevelRepository";




class GetAllLevelService {

    constructor(private ILevelRepository: ILevelRepository) { }

    async execute(): Promise<levelSave[] | null> {

        const levels = await this.ILevelRepository.findAll();

        return levels;
    }
}

export { GetAllLevelService };