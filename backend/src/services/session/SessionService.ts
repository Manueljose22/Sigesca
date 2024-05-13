// import { sign } from "jsonwebtoken";
// import { IUserRepository } from "../../repositories/IUserRepository";
// import { compare } from "bcrypt";
// import * as dotenv from "dotenv";
// dotenv.config()



// export type SessionRequest = {
//     nome: string;
//     senha: string
// }

// class SessionService {

//     constructor(private userRepository: IUserRepository) {

//     }

//     async excute({ nome, senha }: SessionRequest) {

//         const userExists = await this.userRepository.findUserByName(nome);

//         if (!userExists) {
//             return new Error('Usuario inválido, por favor cadastra-se!');
//         }


//         const isMatch = await compare(senha, userExists.senha)

//         if (!isMatch) {
//             return new Error('Senha incorreta!');
//         }

//         const token = sign({

//             id: userExists.id, 
//             name: userExists.nome 
               
//         }, String(process.env.SECRET_JWT))

//         return {token}
//     }
// }

// export { SessionService }