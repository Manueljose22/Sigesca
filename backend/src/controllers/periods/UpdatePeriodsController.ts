import { Request, Response } from 'express';
import { PeriodsRepository } from '../../repositories/periods/PeriodsRepository';
import { UpdatePeriodsService } from '../../services/periods/UpdatePeriodsService';




class UpdatePeriodsController {

    async handle(request: Request, response: Response) {

        const { id } = request.params;
        const { year, dateStart, dateEnd, status } = request.body;
        let statusBoolean: boolean;

        status === 'Activo' ? statusBoolean = true : statusBoolean = false;

        try {

            const periodsRepository = new PeriodsRepository();
            const service = new UpdatePeriodsService(periodsRepository);

            const result = await service.execute(id, { year, dateStart, dateEnd, status: statusBoolean });

            return response.status(200).json({ message: 'Registro actualizado com sucesso!' });

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new UpdatePeriodsController;