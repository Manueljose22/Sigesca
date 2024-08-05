import { Request, Response } from 'express';
import { RoomRepository } from '../../repositories/room/RoomRepository';
import { DeleteRoomService } from '../../services/room/DeleteRoomService';




class DeleteRoomController {

    async handle(request: Request, response: Response) {
        
        const {id} = request.params;

        try {

            const roomRepository = new RoomRepository();
            const service = new DeleteRoomService(roomRepository);

            const result = await service.execute(id);

            return response.json({message: 'registro eliminado com sucesso!'});
            
        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new DeleteRoomController;