import { periodsRequest } from "../services/periods/CreatePeriodsService"


export type savePeriods = {
    idPeriodo: string;
    ano: string;
    data_inicio: Date;
    data_fim: Date;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}


export interface IPeriodsRepository {
    save({ano, data_inicio, data_fim, status}: Omit<periodsRequest, 'idPeriodo'>): Promise<void>
    findByYear(year: string): Promise< savePeriods| null>
}