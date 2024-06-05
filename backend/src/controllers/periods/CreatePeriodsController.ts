import { Request, Response } from 'express';
import { PeriodsRepository } from '../../repositories/PeriodsRepository';
import { CreatePeriodsService } from '../../services/periods/CreatePeriodsService';




class CreatePeriodsController {

    async handle(request: Request, response: Response) {

        let { ano, data_inicio, data_fim, status } = request.body;

        if (status === 'Activo') {
            status = true;
        } else {
            status = false;
        }

        try {

            const periodsRepository = new PeriodsRepository();
            const servive = new CreatePeriodsService(periodsRepository);

            const result = await servive.execute({ ano, data_inicio, data_fim, status });

            return response.json({ message: 'Periodo registrado com sucesso!' });

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new CreatePeriodsController;