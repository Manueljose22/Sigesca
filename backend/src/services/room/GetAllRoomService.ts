import { IRoomRepository, saveRoom } from "../../repositories/room/IRoomRepository";





class GetAllRoomService {

    constructor(private IRoomRepository: IRoomRepository) { }

    async execute(): Promise<saveRoom[] | null> {

        const room = await this.IRoomRepository.findAll();

        return room;
    }
}

export { GetAllRoomService };