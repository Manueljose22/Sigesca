


export type levelRequest = {
    name: string;
}

export type levelSave = {
    idNivel: string;
    createdAt: Date;
    updatedAt: Date;
}


export interface ILevelRepository {
    save({name}: levelRequest): Promise<void>;
    findByLevel(level: string): Promise<levelSave | null>;
    findById(id: string): Promise<levelSave | null>;
    findAll(): Promise<levelSave[] | null>;
    update(id: string, {name}: levelRequest): Promise<void>;
    delete(id: string): Promise<void>;
}