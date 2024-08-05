import { prismaClient } from "../../db/prismaClient";
import { ILevelRepository, levelRequest, levelSave } from "./ILevelRepository";





export class LevelRepository implements ILevelRepository {

    async save({ name }: levelRequest): Promise<void> {
        await prismaClient.nivel.create({
            data: {
                nome: name
            }
        });
    }

    async findByLevel(level: string): Promise<levelSave | null> {

        const result = await prismaClient.nivel.findFirst({
            where: {
                nome: level
            }
        });

        return result;
    }

    async findById(id: string): Promise<levelSave | null> {

        const result = await prismaClient.nivel.findFirst({
            where: {
                idNivel: id
            }
        });

        return result;
    }

    async findAll(): Promise<levelSave[] | null> {

        const result = await prismaClient.nivel.findMany();
        return result;
    }

    async update(id: string, { name }: levelRequest): Promise<void> {

        await prismaClient.nivel.update({
            where: {
                idNivel: id
            },
            data: {
                nome: name,
                updatedAt: new Date()
            }
        })
    }

    async delete(id: string): Promise<void> {

        await prismaClient.nivel.delete({
            where: {
                idNivel: id
            }
        })
    }

}