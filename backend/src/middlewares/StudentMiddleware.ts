import { Request, Response, NextFunction } from 'express';

/**
 *  nome: string;
    documento: string;
    numero_bi: string;
    bi_validade: string;
    nacionalidade: string;
    naturalidade: string;
    data_nascimento: string;
    pdc: string;
    genero: string;
    telefone: string;
    email: string;
    foto: string;
    nome_pai: string;
    nome_mae: string;
    telefoneResponsavel: string
    municipio:  string
    bairro:   string
    rua: string
    casa: string
 * 
 */


class StudentMiddleware {

    static validatedFields(request: Request, response: Response, next: NextFunction) {

        const { nome,  nacionalidade, bi, bi_validade, municipio, casa, bairro, rua,
            pdc, email, genero, data_nascimento,  telefone
        } = request.body;

        if (nome === null) {
            return response.status(422).json({ message: 'Informe o nome do estudante!' })

        } else if (email === null) {
            return response.status(422).json({ message: 'Informe o email!' })

        }else if (nacionalidade === null) {

            return response.status(422).json({ message: 'Informe a nacionalidade!' })

        } else if (bi === null) {

            return response.status(422).json({ message: 'Informe o número do Bilhete de Identidade!' })

        } else if (bi_validade === null) {

            return response.status(422).json({ message: 'Informe a data de validade!' })

        } else if (municipio === null) {

            return response.status(422).json({ message: 'Informe o município!' })

        } else if (bairro === null) {

            return response.status(422).json({ message: 'Informe o bairro!' })

        } else if (casa === null) {

            return response.status(422).json({ message: 'Informe o número da casa!' })

        } else if (genero === null) {

            return response.status(422).json({ message: 'Informe o gênero!' })

        } else if (rua === null) {

            return response.status(422).json({ message: 'Informe a rua!' })

        } else if (data_nascimento === null) {

            return response.status(422).json({ message: 'Informe a data de nascimento!' })

        } else if (pdc === null) {

            return response.status(422).json({ message: 'Informe se é portador de dificiência!' })

        } 


        next();
    }





}

export { StudentMiddleware }