import { IRoomRepository, requestRoom } from "../../repositories/room/IRoomRepository";



class UpadteRoomService {

    constructor(private IRoomRepository: IRoomRepository) { }

    async execute(id: string, {name, numberStudents}: requestRoom): Promise<void | Error> {

        const room = await this.IRoomRepository.findById(id);

        if (!room) {
            throw new Error('Sala inválida!')
        }

        if (room.nome === name) {
            throw new Error('Já existe uma sala com este número!');
        }
       
        const data: requestRoom = {
           name: name ?? room.nome,
           numberStudents: numberStudents ?? room.capacidadeAlunos
        }

        await this.IRoomRepository.update(id, {name: data.name, numberStudents: data.numberStudents});
    }
}

export { UpadteRoomService };