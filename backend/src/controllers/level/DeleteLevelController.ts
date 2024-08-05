import { Request, Response } from 'express';
import { LevelRepository } from '../../repositories/level/LevelRepository';
import { DeleteLevelService } from '../../services/level/DeleteLevelService';




class DeleteLevelController {

    async handle(request: Request, response: Response) {

        const {id} = request.params;

        try {

            const levelRepository = new LevelRepository();
            const service = new DeleteLevelService(levelRepository);

            const result = await service.execute(id);

            return response.status(200).json({message: 'Registro eliminado com sucesso!'});

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new DeleteLevelController;