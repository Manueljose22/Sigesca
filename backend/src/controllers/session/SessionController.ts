import { Request, Response } from "express";
import { SessionRepository } from "../../repositories/session/SessionRepository";
import { SessionService } from "../../services/session/SessionService";




class SessionController {

    async handle(request: Request, response: Response) {
        const { code, password } = request.body as {code: number, password: string};
     
        
        try {

            const sessionRepository = new SessionRepository();
            const service = new SessionService(sessionRepository);

            const result = await service.excute({ code, password });

            return response.status(200).json(result);

        } catch (error: any) {
            return response.status(400).json({ message: error.message })
        }
    }
}

export default new SessionController;