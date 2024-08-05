import { Request, Response } from 'express';
import { LevelRepository } from '../../repositories/level/LevelRepository';
import { UpdateLevelService } from '../../services/level/UpdateLevelService';




class UpadateLevelController {

    async handle(request: Request, response: Response) {

        const { name } = request.body;
        const { id } = request.params;

        try {

            const levelRepository = new LevelRepository();
            const service = new UpdateLevelService(levelRepository);

            const result = await service.execute(id, { name });

            return response.status(200).json({message: 'Resgistro actualizado com sucesso!'})

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new UpadateLevelController;