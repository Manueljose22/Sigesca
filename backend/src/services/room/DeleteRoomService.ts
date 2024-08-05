import { IRoomRepository } from "../../repositories/room/IRoomRepository";



class DeleteRoomService {

    constructor(private IRoomRepository: IRoomRepository) { }

    async execute(id: string): Promise<void | Error> {

        const room = await this.IRoomRepository.findById(id);

        if (!room) {
            throw new Error('Sala inválida!')
        }

        await this.IRoomRepository.delete(id);
    }
}

export { DeleteRoomService };