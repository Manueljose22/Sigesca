import { IPeriodsRepository, savePeriods } from "../../repositories/periods/IPeriodsRepository";





class GetAllPeriodsService {

    constructor(private IPeriodsRepository: IPeriodsRepository) { }

    async execute(): Promise<savePeriods[] | null> {

        const periods = await this.IPeriodsRepository.findAll();

        return periods;
    }
}

export { GetAllPeriodsService };