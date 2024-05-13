import { prismaClient } from "../db/prismaClient";
import { StudentRequest } from "../services/students/CreateStudentsService";
import { IStudentsRepository, saveStudent } from "./IStudentsRepository";



class StudentsRepository implements IStudentsRepository {

    async save({ bairro, bi_validade, casa, data_inscricao, telefonePai, documento, email, foto, genero, municipio, n_matricula, nacionalidade,
        nome, nome_mae, nome_pai, numero_bi, rua, telefone
    }: StudentRequest): Promise<void> {
        await prismaClient.aluno.create({
            data: {
                n_matricula,
                nome,
                data_inscricao,
                documento,
                numero_bi,
                bi_validade,
                nacionalidade,
                genero,
                telefone,
                email,
                foto,

                responsavel: {
                    create: {
                        nome_pai,
                        nome_mae,
                        telefonePai
                    }
                },

                Endereco: {
                    create: {
                        municipio,
                        bairro,
                        rua,
                        casa,
                    }
                }
            }
        })
    }

    async findByNumber(n_matricula: number): Promise<saveStudent | null> {
        throw new Error("Method not implemented.");
    }

    async findByName(name: string): Promise<saveStudent | null> {
        throw new Error("Method not implemented.");
    }

    async findByBI(numberBI: string): Promise<saveStudent | null> {
        throw new Error("Method not implemented.");
    }

}