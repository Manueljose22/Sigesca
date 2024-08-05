import { Request, Response } from 'express';
import { PeriodsRepository } from '../../repositories/periods/PeriodsRepository';
import { CreatePeriodsService } from '../../services/periods/CreatePeriodsService';




class CreatePeriodsController {

    async handle(request: Request, response: Response) {

        let { year, dateStart, dateEnd, status } = request.body;

        if (status === 'Activo') {
            status = true;
        } else {
            status = false;
        }

        try {

            const periodsRepository = new PeriodsRepository();
            const servive = new CreatePeriodsService(periodsRepository);

            const result = await servive.execute({ year, dateStart, dateEnd, status });

            return response.json({ message: 'Periodo registrado com sucesso!' });

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new CreatePeriodsController;