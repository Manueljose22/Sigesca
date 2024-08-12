import { prismaClient } from "../../db/prismaClient"
import { IRoomRepository, requestRoom, saveRoom } from "./IRoomRepository";




export class RoomRepository implements IRoomRepository {
    
    async save({ name, numberStudents }: requestRoom): Promise<void> {

        await prismaClient.sala.create({
            data: {
                nome: name,
                capacidadeAlunos: Number(numberStudents)
            }
        });
    }

    async findByName(name: string): Promise<saveRoom | null> {
        const room = await prismaClient.sala.findFirst({
            where: {
                nome: name
            }
        });

        return room;
    }

    async findById(id: string): Promise<saveRoom | null> {

        const room = await prismaClient.sala.findFirst({
            where: {
                idSala: id
            }
        });

        return room;
    }

    async findAll(): Promise<saveRoom[] | null> {

        const alls = await prismaClient.sala.findMany();
        return alls;
    }

    async delete(id: string): Promise<void> {

        await prismaClient.sala.delete({
            where: {
                idSala: id
            }
        });
    }

    async update(id: string, { name, numberStudents }: requestRoom): Promise<void> {

        await prismaClient.sala.update({
            where: {
                idSala: id
            },
            data: {
                nome: name,
                capacidadeAlunos: numberStudents,
                updatedAt: new Date()
            }
        })
    }

}