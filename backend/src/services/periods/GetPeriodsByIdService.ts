import { IPeriodsRepository, savePeriods } from "../../repositories/periods/IPeriodsRepository";





class GetPeriodsByIdService {

    constructor(private IPeriodsRepository: IPeriodsRepository) { }

    async execute(id: string): Promise<savePeriods | Error> {

        const periods = await this.IPeriodsRepository.findById(id);

        if (!periods) {
            throw new Error('Periodo invalido');
        }

        return periods;
    }
}

export { GetPeriodsByIdService };