import { sign } from "jsonwebtoken";
import { ISessionRepository} from "../../repositories/session/ISessionRepository";
import { compare } from "bcrypt";
import * as dotenv from "dotenv";
dotenv.config()



export type SessionRequest = {
    code: number;
    password: string;
}

class SessionService {

    constructor(private userRepository: ISessionRepository) {

    }

    async excute({ code, password }: SessionRequest) {

        if (!code) {
            throw new Error('Informe o código de acesso!')
            
        } else if (!password) {
            throw new Error('Informe a senha!')

        }

        const userExists = await this.userRepository.findAccessCode(code);

        if (!userExists) {
            throw new Error('Não existe usuário com essas credencias!');
        }


        const isMatch = await compare(password, userExists.senha)

        if (!isMatch) {
            throw new Error('Senha incorreta!');
        }

        const token = sign({

            id: userExists.alunoId || userExists.professorId, 
            nivelAcesso: userExists.nivelAcesso 
               
        }, String(process.env.SECRET_JWT))

        return {
            token
        }
    }
}

export { SessionService }