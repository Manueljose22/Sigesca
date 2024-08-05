import { Request, Response } from 'express';
import { PeriodsRepository } from '../../repositories/periods/PeriodsRepository';
import { GetAllPeriodsService } from '../../services/periods/GetAllPeriodsService';




class GetAllPeriodsController {

    async handle(request: Request, response: Response) {

        try {

            const periodsRepository = new PeriodsRepository();
            const service = new GetAllPeriodsService(periodsRepository);

            const result = await service.execute();

            return response.status(200).json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new GetAllPeriodsController;