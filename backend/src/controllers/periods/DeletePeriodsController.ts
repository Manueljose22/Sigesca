import { Request, Response } from 'express';
import { PeriodsRepository } from '../../repositories/periods/PeriodsRepository';
import { DeletePeriodsService } from '../../services/periods/DeletePeriodsService';




class DeletePeriodsController {

    async handle(request: Request, response: Response) {

        const {id} = request.params;

        try {

            const periodsRepository = new PeriodsRepository();
            const service = new DeletePeriodsService(periodsRepository);

            const result = await service.execute(id);

            return response.status(200).json({message: 'Registro eliminado com sucesso!'});

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new DeletePeriodsController;