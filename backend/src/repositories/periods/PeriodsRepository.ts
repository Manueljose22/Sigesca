import { prismaClient } from "../../db/prismaClient";
import { periodsRequest } from "../../services/periods/CreatePeriodsService";
import { IPeriodsRepository, savePeriods } from "./IPeriodsRepository";



export class PeriodsRepository implements IPeriodsRepository{
    
    async update(id: string, {year, dateStart, dateEnd, status}: periodsRequest): Promise<void> {
        await prismaClient.periodo_letivo.update({
            where: {
                idPeriod: id
            },
            data:{
                year,
                dateStart,
                dateEnd,
                status,
                updatedAt: new Date()
            }
        })
    }
    
    async delete(id: string): Promise<void> {
        await prismaClient.periodo_letivo.delete({
            where: {
                idPeriod: id
            }
        })
    }
    
    async findAll(): Promise<savePeriods[] | null> {
        const all = await prismaClient.periodo_letivo.findMany();
        return all;
    }

    async findById(id: string): Promise<savePeriods | null> {
        const periods = await prismaClient.periodo_letivo.findFirst({
            where:{
                idPeriod: id
            }
        });

        return periods;
    }

    async save({ year, dateStart, dateEnd, status }: Omit<periodsRequest, "idPeriodo">): Promise<void> {
        
        await prismaClient.periodo_letivo.create({
            data: {
                year,
                dateStart,
                dateEnd,
                status,
            }
        });
    }

    async findByYear(year: string): Promise<savePeriods | null> {
       
        const periods = await prismaClient.periodo_letivo.findFirst({
            where: {
                year
            }
        }); 

        return periods;
    }

}