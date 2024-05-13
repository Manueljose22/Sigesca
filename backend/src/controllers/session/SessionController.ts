// import { Request, Response } from "express";
// import { UserRepository } from "../../repositories/userRepository";
// import { SessionService } from "../../services/session/SessionService";



// class SessionController {

//     async handle(request: Request, response: Response) {

//         const {nome, senha} = request.body;

//         const userRepository = new UserRepository();
//         const sessionService = new SessionService(userRepository);

//         const result = await sessionService.excute({nome, senha});
        
//         if (result instanceof Error) {
//             return response.status(400).json({message: result.message});
//         }

//         return response.status(201).json(result);
//     }
// }

// export default new SessionController;