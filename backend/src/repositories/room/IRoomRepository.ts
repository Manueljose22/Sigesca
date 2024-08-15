


export type saveRoom = {
    idSala: string;
    nome: string;
    capacidadeAlunos: number;
    createdAt: Date;
    updatedAt: Date;
}

export type requestRoom = {
    name: string;
    numberStudents: string;
}


export interface IRoomRepository {
    save({name, numberStudents}: requestRoom): Promise<void>;
    findById(id: string): Promise<saveRoom | null>;
    findByName(name: string): Promise<saveRoom | null>;
    findAll(): Promise<saveRoom[] | null>;
    delete(id: string): Promise<void>;
    update(id: string, {name, numberStudents}: requestRoom): Promise<void>;
}