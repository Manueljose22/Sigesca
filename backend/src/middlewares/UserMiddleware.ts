import { Request, Response, NextFunction } from 'express';



class UserMiddleware {

    static validatedFields(request: Request, response: Response, next: NextFunction) {

        const {nome, senha, role} = request.body;

        if (!nome) {
            return response.status(422).json({message: 'Nome é obrigatorio!'})

        } else if (!senha) {
            return response.status(422).json({message: 'Senha é obrigatorio!'})
        }
        // } else if (!role){
        //     return response.status(422).json({message: 'Tipo de acesso é obrigatorio!'})
        // }

        next();
    }





}

export { UserMiddleware }