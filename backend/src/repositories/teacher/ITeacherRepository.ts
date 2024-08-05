

export type teacherRequest = {
    nome:          string;
    formacao:      string;
    nivel:         string;
    numero_bi:     string;
    validade_bi:   string;
    Documento:     string;
    telefone:      string;
    email:         string;
    foto:          string;
    pdc:           string;
    salario:       number;
}

export type teacherSave = {
    idProfessor:   string;
    usuarioId:     string;
    nome:          string; 
    formacao:      string;
    nivel:         string;
    numero_bi:     string;
    validade_bi:   string;
    Documento:     string;
    telefone:      string;
    email:         string;
    foto:          string;
    pdc:           string;
    salario:       number;
    enderecoId:    string;
    createdAt:     Date;
    updatedAt:     Date;
}

export interface ITeacherRepository {

}