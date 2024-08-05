import { periodsRequest } from "../../services/periods/CreatePeriodsService"


export type savePeriods = {
    idPeriod: string;
    year: string;
    dateStart: Date;
    dateEnd: Date;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}


export interface IPeriodsRepository {
    save({year, dateStart, dateEnd, status}: Omit<periodsRequest, 'idPeriod'>): Promise<void>;
    findByYear(year: string): Promise< savePeriods| null>;
    findById(id: string): Promise <savePeriods | null>;
    findAll(): Promise <savePeriods[] | null>;
    delete(id: string): Promise <void>;
    update(id: string, data: periodsRequest): Promise <void>;
}