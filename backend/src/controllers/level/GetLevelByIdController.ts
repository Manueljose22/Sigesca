import { Request, Response } from 'express';
import { LevelRepository } from '../../repositories/level/LevelRepository';
import { GetLevelByIdService } from '../../services/level/GetLevelByIdService';




class GetLevelByIdController {

    async handle(request: Request, response: Response) {

        const { id } = request.params;

        try {

            const levelRepository = new LevelRepository();
            const service = new GetLevelByIdService(levelRepository);

            const result = await service.execute(id);

            return response.status(200).json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new GetLevelByIdController;