import { Request, Response } from 'express';
import { PeriodsRepository } from '../../repositories/periods/PeriodsRepository';
import { GetPeriodsByIdService } from '../../services/periods/GetPeriodsByIdService';




class GetPeriodsByIdController {

    async handle(request: Request, response: Response) {

        const { id } = request.params;

        try {

            const periodsRepository = new PeriodsRepository();
            const service = new GetPeriodsByIdService(periodsRepository);

            const result = await service.execute(id);

            return response.status(200).json(result);
        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new GetPeriodsByIdController;