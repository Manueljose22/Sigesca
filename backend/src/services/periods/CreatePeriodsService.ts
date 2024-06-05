import { IPeriodsRepository } from "../../repositories/IPeriodsRepository";



export type periodsRequest = {
    idPeriodo: string;
    ano: string;
    data_inicio: Date;
    data_fim: Date;
    status: boolean;
}


class CreatePeriodsService {

    constructor(private periodsRepository: IPeriodsRepository) { }

    async execute({ ano, data_inicio, data_fim, status }: Omit<periodsRequest, 'idPeriodo'>): Promise<void | Error> {

        const period = await this.periodsRepository.findByYear(ano);

        if (period) {
            throw new Error('Periodo já registrado'!);
        }

        await this.periodsRepository.save({ ano, data_inicio: new Date(data_inicio), data_fim: new Date(data_fim), status })
    }
}

export { CreatePeriodsService };