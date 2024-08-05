import { IRoomRepository, saveRoom } from "../../repositories/room/IRoomRepository";





class GetRoomByIdService {

    constructor(private IRoomRepository: IRoomRepository) { }

    async execute(id: string): Promise<saveRoom | Error> {

        const room = await this.IRoomRepository.findById(id);

        if (!room) {
            throw new Error('Sala inválida!');
        }

        return room;
    }
}

export { GetRoomByIdService };