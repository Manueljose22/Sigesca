import { Aluno } from "@prisma/client";
import { prismaClient } from "../../db/prismaClient";
import { StudentRequest } from "../../services/students/CreateStudentsService";
import { IStudentsRepository, saveStudent } from "./IStudentsRepository";



export class StudentsRepository implements IStudentsRepository {
    
    async save({ bairro, bi_validade, casa, data_nascimento, pdc, senha, email, foto, genero, municipio, n_matricula, nacionalidade,
        nome, bi, rua, telefone
    }: StudentRequest): Promise<void> {

        const endereco = await prismaClient.endereco.create({
            data: {
                municipio,
                bairro,
                rua,
                casa,
            },
        });



        const aluno = await prismaClient.aluno.create({
            data: {
                n_matricula,
                nome,
                bi,
                data_nascimento,
                bi_validade,
                nacionalidade,
                genero,
                telefone,
                email,
                foto,
                pdc,
                enderecosId: endereco.idEndereco,
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

    async findById(id: string): Promise<saveStudent | null> {

        return await prismaClient.aluno.findFirst({
            where: {
                idAluno: id
            },
            include: {
                Endereco: {
                    select:{
                        idEndereco: true,
                        municipio: true,
                        bairro: true,
                        rua: true,
                        casa: true
                    }
                },
                Sessao: {
                    select: {
                        codigo: true,
                        senha: true,
                    }
                }
            }
        })
    }

    async findAlls(): Promise<saveStudent[] | null> {

        const alls = await prismaClient.aluno.findMany({
            include: {
                Endereco: {
                    select: {
                        idEndereco: true,
                        bairro: true,
                        municipio: true,
                        rua: true,
                        casa: true
                    }
                },
                Sessao: {
                    select: {
                        codigo: true,
                        senha: true,
                    }
                }
            }
        })

        return alls;
    }


    async findByNumber(n_matricula: number): Promise<saveStudent | null> {

        const student = await prismaClient.aluno.findFirst({
            where: {
                n_matricula: n_matricula
            }, include: {
                Endereco: {
                    select: {
                        idEndereco: true,
                        bairro: true,
                        municipio: true,
                        rua: true,
                        casa: true
                    }
                },
                Sessao: {
                    select: {
                        codigo: true,
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
                    contains: name,
                    equals: name
                }
            }, include: {
                Endereco: {
                    select: {
                        idEndereco: true,
                        bairro: true,
                        municipio: true,
                        rua: true,
                        casa: true
                    }
                },
                Sessao: {
                    select: {
                        codigo: true,
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
                bi: numberBI
            }, include: {
                Endereco: {
                    select: {
                        idEndereco: true,
                        bairro: true,
                        municipio: true,
                        rua: true,
                        casa: true
                    }
                },
                Sessao: {
                    select: {
                        codigo: true,
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

     async update(id: string, data: StudentRequest): Promise<void> {

        const endereco = await prismaClient.endereco.update({
            
            where: {
                idEndereco: data.idEndereco
            },

            data: {
                municipio: data.municipio,
                bairro: data.bairro,
                rua: data.rua,
                casa: data.casa,
                updated_At: new Date()

            },
        });

        await prismaClient.aluno.update({
            
            where:{
                idAluno: id
            },
            
            data: {
                n_matricula: data.n_matricula,
                nome: data.nome,
                bi: data.bi,
                bi_validade: data.bi_validade,
                data_nascimento: data.data_nascimento,
                nacionalidade: data.nacionalidade,
                genero: data.genero,
                telefone: data.telefone,
                email: data.email,
                foto: data.foto,
                pdc: data.pdc,
                enderecosId: endereco.idEndereco, 
                updatedAt: new Date()

            }

        })
    }

}

