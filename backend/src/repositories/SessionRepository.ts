import { Sessao } from "@prisma/client";
import { prismaClient } from "../db/prismaClient";
import { ISessionRepository, saveSession } from "./ISessionRepository";



export class SessionRepository implements ISessionRepository{

    async findAccessCode(codigo: number): Promise<saveSession | null> {
        
        return await prismaClient.sessao.findUnique({
            where: {
                codigo: Number(codigo)
            }
        });
    }

}