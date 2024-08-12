import { IPeriodsRepository } from "../../repositories/periods/IPeriodsRepository";



export type periodsRequest = {

    year: string;
    dateStart: Date;
    dateEnd: Date;
    status: boolean;
}


class CreatePeriodsService {

    constructor(private periodsRepository: IPeriodsRepository) { }

    async execute({ year, dateStart, dateEnd, status }: periodsRequest): Promise<void | Error> {

        const period = await this.periodsRepository.findByYear(year);

        if (period) {
            throw new Error('Periodo já registrado');
        }

        if (!year || !dateStart || !dateEnd) {

            throw new Error('Por favor preecha todos os campos!');
        }

        if (year.length > 4) {
            throw new Error('Ano inválido, tente novamente!');
        }

        if (year < new Date().getFullYear().toString() || year !== new Date(dateStart).getFullYear().toString()) {

            throw new Error('Data inválida, tente novamente!');
        }

        await this.periodsRepository.save({ year, dateStart: new Date(dateStart), dateEnd: new Date(dateEnd), status })
    }
}

export { CreatePeriodsService };