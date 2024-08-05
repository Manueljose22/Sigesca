import { Request, Response } from 'express';
import { RoomRepository } from '../../repositories/room/RoomRepository';
import { GetAllRoomService } from '../../services/room/GetAllRoomService';




class GetAllRoomController {

    async handle(request: Request, response: Response) {
        

        try {

            const roomRepository = new RoomRepository();
            const service = new GetAllRoomService(roomRepository);

            const result = await service.execute();

            return response.json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new GetAllRoomController;