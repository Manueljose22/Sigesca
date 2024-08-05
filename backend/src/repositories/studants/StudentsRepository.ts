import { Aluno } from "@prisma/client";
import { prismaClient } from "../../db/prismaClient";
import { StudentRequest } from "../../services/students/CreateStudentsService";
import { IStudentsRepository, saveStudent } from "./IStudentsRepository";



export class StudentsRepository implements IStudentsRepository {

    async findById(id: string): Promise<saveStudent | null> {

        return await prismaClient.aluno.findFirst({
            where: {
                idAluno: id
            },
            include: {
                responsavel: true,
                Endereco: true,
                Sessao: {
                    select: {
                        codigo: true
                    }
                }
            }
        })
    }

    async findAlls(): Promise<saveStudent[] | null> {

        const alls = await prismaClient.aluno.findMany({
            include: {
                responsavel: true,
                Endereco: true,
                Sessao: {
                    select: {
                        codigo: true
                    }
                }
            }
        })

        return alls;
    }

    async save({ bairro, bi_validade, casa, senha, data_nascimento, telefoneResponsavel, naturalidade, pdc, documento, email, foto, genero, municipio, n_matricula, nacionalidade,
        nome, nome_mae, nome_pai, numero_bi, rua, telefone
    }: StudentRequest): Promise<void> {

        const endereco = await prismaClient.endereco.create({
            data: {
                municipio,
                bairro,
                rua,
                casa,
            },
        });


        const responsavel = await prismaClient.responsavel.create({
            data: {
                nome_pai,
                nome_mae,
                telefone: telefoneResponsavel,
                enderecosId: endereco.idEndereco
            },
        });


        const aluno = await prismaClient.aluno.create({
            data: {
                n_matricula,
                nome,
                documento,
                numero_bi,
                data_nascimento,
                bi_validade,
                nacionalidade,
                genero,
                telefone,
                email,
                foto,
                naturalidade,
                pdc,
                enderecosId: endereco.idEndereco,
                responsaveisId: responsavel.idResponsavel,

            },
        });


        await prismaClient.sessao.create({
            data: {
                alunoId: aluno.idAluno,
                codigo: n_matricula,
                senha: senha,
                nivelAcesso: 'student',
            },
        });
    }

    async findByNumber(n_matricula: number): Promise<saveStudent | null> {

        const student = await prismaClient.aluno.findFirst({
            where: {
                n_matricula: n_matricula
            }, include: {
                responsavel: {
                    select: {
                        nome_pai: true,
                        nome_mae: true,
                        telefone: true
                    }
                },
                Endereco: {
                    select: {
                        bairro: true,
                        municipio: true,
                        rua: true,
                        casa: true
                    }
                },
                Sessao: {
                    select: {
                        senha: true
                    }
                }
            }
        });

        return student;

    }

    async findByName(name: string): Promise<saveStudent[] | null> {

        const student = await prismaClient.aluno.findMany({
            where: {
                nome: {
                    startsWith: name,
                }
            }, include: {
                responsavel: {
                    select: {
                        nome_pai: true,
                        nome_mae: true,
                        telefone: true
                    }
                },
                Endereco: {
                    select: {
                        bairro: true,
                        municipio: true,
                        rua: true,
                        casa: true
                    }
                },
                Sessao: {
                    select: {
                        senha: true
                    }
                }
            }
        });

        return student;
    }

    async findByBI(numberBI: string): Promise<saveStudent | null> {

        const student = await prismaClient.aluno.findUnique({
            where: {
                numero_bi: numberBI
            }, include: {
                responsavel: {
                    select: {
                        nome_pai: true,
                        nome_mae: true,
                        telefone: true
                    }
                },
                Endereco: {
                    select: {
                        bairro: true,
                        municipio: true,
                        rua: true,
                        casa: true
                    }
                },
                Sessao: {
                    select: {
                        senha: true
                    }
                }
            }
        });

        return student
    }

   
    async delete(id: string): Promise<void> {

        await prismaClient.aluno.delete({
            where: {
                idAluno: id
            }
        })
    }

     async update(id: string, data: saveStudent): Promise<void> {

        const endereco = await prismaClient.endereco.update({
            where: {
                idEndereco: data.enderecosId
            },

            data: {
                municipio: data.municipio,
                bairro: data.bairro,
                rua: data.rua,
                casa: data.casa,
                updated_At: new Date()

            },
        });


        const responsavel = await prismaClient.responsavel.update({

            where: {
                idResponsavel: data.responsaveisId
            },

            data: {
                nome_pai: data.nome_pai,
                nome_mae: data.nome_mae,
                telefone: data.telefoneResponsavel,
                enderecosId: endereco.idEndereco,
                updatedAt: new Date(),
                
            },
        });


        const aluno = await prismaClient.aluno.update({
            
            where:{
                idAluno: id
            },
            
            data: {
                n_matricula: data.n_matricula,
                nome: data.nome,
                documento: data.documento,
                numero_bi: data.numero_bi,
                data_nascimento: data.data_nascimento,
                bi_validade: data.bi_validade,
                nacionalidade: data.nacionalidade,
                genero: data.genero,
                telefone: data.telefone,
                email: data.email,
                foto: data.foto,
                naturalidade: data.nacionalidade,
                pdc: data.pdc,
                enderecosId: endereco.idEndereco, 
                responsaveisId: responsavel.idResponsavel,
                updatedAt: new Date()

            }

        })
    }

}

