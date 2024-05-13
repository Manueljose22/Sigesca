// import { Request, Response } from "express";
// import { StudentsRepository } from "../../repositories/StudentsRepository";
// import { GetAllStundentsService } from "../../services/students/GetAllStudentsService";



// class GetAllStudentsController {
    
//     async  handle(request: Request, resposne: Response){

//         const studentRepository = new StudentsRepository();
//         const getAllStundentsService = new GetAllStundentsService(studentRepository);

//         const result = await getAllStundentsService.execute();

//         return resposne.status(200).json(result);
//     }
// }

// export default new GetAllStudentsController;