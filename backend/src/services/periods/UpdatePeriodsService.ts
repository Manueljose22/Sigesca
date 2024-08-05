import { IPeriodsRepository } from "../../repositories/periods/IPeriodsRepository";
import { periodsRequest } from "./CreatePeriodsService";





class UpdatePeriodsService {

    constructor(private IPeriodsRepository: IPeriodsRepository) { }

    async execute(id: string, { year, dateStart, dateEnd, status }: periodsRequest): Promise<void | Error> {

        const periods = await this.IPeriodsRepository.findById(id);

        if (!periods) {
            throw new Error('Período inválido!')
        }

        if (year < new Date().getFullYear().toString() || year > new Date(dateStart).getFullYear().toString()
            || year > new Date(dateEnd).getFullYear().toString()) {
        
            throw new Error('Data invalida, tente novamente!');
        }

        const data: periodsRequest = {
            year: year ?? periods.year,
            dateStart: dateStart ?? periods.dateStart,
            dateEnd: dateEnd ?? periods.dateEnd,
            status: status ?? periods.status
        }

        await this.IPeriodsRepository.update(id, {
            year: data.year, dateStart: new Date(data.dateStart),
            dateEnd: new Date(data.dateEnd), status: data.status
        });
    }
}

export { UpdatePeriodsService };