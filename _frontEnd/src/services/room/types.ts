

export interface IRoom{
    idSala: string;
    nome: string;
    capacidadeAlunos: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUpdateRoom {
    idSala: string;
    nome: string;
    capacidadeAlunos: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface ICreateRoom {
    name: string;
    numberStudents: number;
}