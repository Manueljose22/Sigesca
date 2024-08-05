import { Request, Response } from 'express';
import { LevelRepository } from '../../repositories/level/LevelRepository';
import { GetAllLevelService } from '../../services/level/GetAllLevelService';




class GetAllLevelController {

    async handle(request: Request, response: Response) {

        try {

            const levelRepository = new LevelRepository();
            const service = new GetAllLevelService(levelRepository);

            const result  = await service.execute();

            return response.status(200).json(result);

        } catch (error: any) {
            return response.status(500).json({ message: error.message })
        }
    }
}

export default new GetAllLevelController;