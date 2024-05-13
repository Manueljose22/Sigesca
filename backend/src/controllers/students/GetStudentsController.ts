// import { Request, Response } from "express";
// import { StudentsRepository } from "../../repositories/StudentsRepository";
// import { GetStundentsService } from "../../services/students/GetStundentsService";



// class GetStudentsController {
    
//     async  handle(request: Request, resposne: Response){
//         const {id} = request.params;

//         const studentRepository = new StudentsRepository();
//         const getStundentsService = new GetStundentsService(studentRepository);

//         const result = await getStundentsService.execute(id);

//         if (result instanceof Error) {
//             return resposne.status(400).json({message: result.message});
//         }

//         return resposne.status(200).json(result);
//     }
// }

// export default new GetStudentsController;