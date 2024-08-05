import { Request, Response } from 'express';
import { RoomRepository } from '../../repositories/room/RoomRepository';
import { CreateRoomService } from '../../services/room/CreateRoomService';




class CreateRoomController {

    async handle(request: Request, response: Response) {

        const { name, numberStudents } = request.body;

        try {

            const roomRepository = new RoomRepository();
            const service = new CreateRoomService(roomRepository);

            const result = await service.execute({ name, numberStudents })

            return response.status(201).json({message: 'Registrado com sucesso!'});

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new CreateRoomController;