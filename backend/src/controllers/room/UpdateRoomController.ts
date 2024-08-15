import { Request, Response } from 'express';
import { RoomRepository } from '../../repositories/room/RoomRepository';
import { UpadteRoomService } from '../../services/room/UpdateRoomService';




class UpdateRoomController {

    async handle(request: Request, response: Response) {

        const { id } = request.params;
        const { name, numberStudents } = request.body;

        try {

            const roomRepository = new RoomRepository();
            const service = new UpadteRoomService(roomRepository);

            const result = await service.execute(id, { name, numberStudents });

            return response.json({ message: 'Registro actualizado com sucesso!' });

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new UpdateRoomController;