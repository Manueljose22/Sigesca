import { Request, Response } from 'express';
import { RoomRepository } from '../../repositories/room/RoomRepository';
import { GetRoomByIdService } from '../../services/room/GetRoomByIdService';




class GetRoomByIdController {

    async handle(request: Request, response: Response) {
        
        const {id} = request.params;

        try {

            const roomRepository = new RoomRepository();
            const service = new GetRoomByIdService(roomRepository);

            const result = await service.execute(id);

            return response.json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new GetRoomByIdController;