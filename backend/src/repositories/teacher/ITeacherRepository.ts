

export type teacherRequest = {
    nome:          string;
    formacao:      string;
    bi:     string;
    validade_bi:   string;
    telefone:      string;
    email:         string;
    foto:          string;
    pdc:           string;
    salario:       number;
}

export type teacherSave = {
    idProfessor:   string;
    nome:          string; 
    formacao:      string;
    bi:     string;
    validade_bi:   string;
    telefone:      string;
    email:         string;
    foto:          string;
    pdc:           string;
    enderecoId:    string;
    createdAt:     Date;
    updatedAt:     Date;
}

export interface ITeacherRepository {

}