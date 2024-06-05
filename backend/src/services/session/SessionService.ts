import { sign } from "jsonwebtoken";
import { ISessionRepository} from "../../repositories/ISessionRepository";
import { compare } from "bcrypt";
import * as dotenv from "dotenv";
dotenv.config()



export type SessionRequest = {
    codigo: number;
    senha: string;
}

class SessionService {

    constructor(private userRepository: ISessionRepository) {

    }

    async excute({ codigo, senha }: SessionRequest) {

        if (!codigo) {
            throw new Error('Informe o código de acesso!')
            
        } else if (!senha) {
            throw new Error('Informe a senha!')

        }

        const userExists = await this.userRepository.findAccessCode(codigo);

        if (!userExists) {
            throw new Error('Não existe usuário com essas credencias!');
        }


        const isMatch = await compare(senha, userExists.senha)

        if (!isMatch) {
            throw new Error('Senha incorreta!');
        }

        const token = sign({

            id: userExists.alunoId || userExists.professorId, 
            nivelAcesso: userExists.nivelAcesso 
               
        }, String(process.env.SECRET_JWT))

        return {token}
    }
}

export { SessionService }