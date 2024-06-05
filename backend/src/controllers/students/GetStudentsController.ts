import { Request, Response } from "express";
import { StudentsRepository } from "../../repositories/StudentsRepository";
import { GetStundentsService } from "../../services/students/GetStundentsService";



class GetStudentsController {

    async handle(request: Request, resposne: Response) {
        
        const { id } = request.params;

        try {

            const studentRepository = new StudentsRepository();
            const service = new GetStundentsService(studentRepository);

            const result = await service.execute(id);

            return resposne.status(200).json(result);

        } catch (error: any) {

            return resposne.status(400).json({ message: error.message });
        }



    }
}

export default new GetStudentsController;