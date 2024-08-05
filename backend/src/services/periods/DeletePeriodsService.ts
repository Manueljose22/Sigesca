import { IPeriodsRepository } from "../../repositories/periods/IPeriodsRepository";





class DeletePeriodsService {

    constructor(private IPeriodsRepository: IPeriodsRepository) { }

    async execute(id: string): Promise<void | Error> {

        const periods = await this.IPeriodsRepository.findById(id);

        if (!periods) {
            throw new Error('Período inválido!')
        }

        await this.IPeriodsRepository.delete(id);
    }
}

export { DeletePeriodsService };