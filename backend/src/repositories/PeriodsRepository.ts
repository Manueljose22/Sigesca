import { prismaClient } from "../db/prismaClient";
import { periodsRequest } from "../services/periods/CreatePeriodsService";
import { IPeriodsRepository, savePeriods } from "./IPeriodsRepository";



export class PeriodsRepository implements IPeriodsRepository{

    async save({ ano, data_inicio, data_fim, status }: Omit<periodsRequest, "idPeriodo">): Promise<void> {
        
        await prismaClient.periodo_letivo.create({
            data: {
                ano,
                data_inicio,
                data_fim,
                status
            }
        });
    }

    async findByYear(year: string): Promise<savePeriods | null> {
       
        const periods = await prismaClient.periodo_letivo.findFirst({
            where: {
                ano: year
            }
        }); 

        return periods;
    }

}