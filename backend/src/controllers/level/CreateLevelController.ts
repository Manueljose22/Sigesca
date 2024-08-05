import { Request, Response } from 'express';
import { LevelRepository } from '../../repositories/level/LevelRepository';
import { CreateLevelService } from '../../services/level/CreateLevelService';




class CreateLevelController {

    async handle(request: Request, response: Response) {
        
        const {name} = request.body;

        try {

            const levelRepository = new LevelRepository();
            const service = new CreateLevelService(levelRepository);

            const result  = await service.execute({name});

            return response.status(201).json({message: 'Registrado com sucesso!'});

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new CreateLevelController;