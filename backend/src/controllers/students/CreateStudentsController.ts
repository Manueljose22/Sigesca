// import { Request, Response } from "express";
// import { CreateStudentsService } from "../../services/students/CreateStudentsService";
// import {IStudentsRepository } from "../../repositories/IStudentsRepository";


// class CreateStudentsController {
//     async handle(request: Request, response: Response) {

//         const { body } = request;
        
//         if (request.file) {
//             body.foto = request.file.filename;
//         }


//         const studentRepository = new IStudentsRepository();
//         const createStudentsService = new CreateStudentsService(studentRepository);

//         const result = await createStudentsService.execute(body);

//         if (result instanceof Error) {
//             return response.status(400).json({message: result.message});
//         }

//         return response.status(201).json({message: 'Cadastro feito com sucesso!'});
//     }
// }

// export default new CreateStudentsController;