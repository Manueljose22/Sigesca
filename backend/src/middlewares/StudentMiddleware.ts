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

        const { nome, nome_mae, nome_pai, nacionalidade, naturalidade, numero_bi, bi_validade, municipio, casa, bairro, rua,
            pdc, email, genero, documento, data_nascimento, telefoneResponsavel, telefone
        } = request.body;

        if (!nome) {
            return response.status(422).json({ message: 'Informe o nome do estudante!' })

        } else if (!email) {
            return response.status(422).json({ message: 'Informe o email!' })

        } else if (!nome_mae) {
            return response.status(422).json({ message: 'Informe o nome da Mãe!' })

        } else if (!nome_pai) {

            return response.status(422).json({ message: 'Informe o nome do Pai' })

        } else if (!nacionalidade) {

            return response.status(422).json({ message: 'Informe a nacionalidade!' })

        } else if (!naturalidade) {

            return response.status(422).json({ message: 'Informe a naturalidade!' })

        } else if (!numero_bi) {

            return response.status(422).json({ message: 'Informe o número do Bilhete de Identidade!' })

        } else if (!bi_validade) {

            return response.status(422).json({ message: 'Informe a data de validade!' })

        } else if (!municipio) {

            return response.status(422).json({ message: 'Informe o município!' })

        } else if (!bairro) {

            return response.status(422).json({ message: 'Informe o bairro!' })

        } else if (!casa) {

            return response.status(422).json({ message: 'Informe o número da casa!' })

        } else if (!genero) {

            return response.status(422).json({ message: 'Informe o gênero!' })

        } else if (!rua) {

            return response.status(422).json({ message: 'Informe a rua!' })

        } else if (!data_nascimento) {

            return response.status(422).json({ message: 'Informe a data de nascimento!' })

        } else if (!pdc) {

            return response.status(422).json({ message: 'Informe se é portador de dificiência!' })

        } else if (!documento) {

            return response.status(422).json({ message: 'Envie o documento!' })

        } else if (!telefone) {

            return response.status(422).json({ message: 'Informe o seu número ou de casa!' })
        } else if (!telefoneResponsavel) {

            return response.status(422).json({ message: 'Informe o número do resposavel!' })
        }

        next();
    }





}

export { StudentMiddleware }