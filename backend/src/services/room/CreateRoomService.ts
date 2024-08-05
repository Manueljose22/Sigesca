import { IRoomRepository, requestRoom } from "../../repositories/room/IRoomRepository";





class CreateRoomService {

    constructor(private IRoomRepository: IRoomRepository) { }

    async execute({ name, numberStudents }: requestRoom): Promise<void | Error> {

        const room = await this.IRoomRepository.findByName(name);

        if (room) {
            throw new Error('Sala já existe!');
        }

        if (!name || !numberStudents) {

            throw new Error('Por favor preecha todos os campos!')
        }

        await this.IRoomRepository.save({ name, numberStudents })
    }
}

export { CreateRoomService };