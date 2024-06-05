import { prismaClient } from "../db/prismaClient"




export class RoomRepository{

    async save(): Promise<void>{
    
    }

    async findAll() {

        const alls = await prismaClient.aluno.findMany({
            
        });

        return alls
    }

}