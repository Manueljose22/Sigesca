import { Request, Response } from "express";
import { StudentsRepository } from "../../repositories/StudentsRepository";
import { GetAllStundentsService } from "../../services/students/GetAllStudentsService";



class GetAllStudentsController {

    async handle(request: Request, resposne: Response) {

        try {

            const studentRepository = new StudentsRepository();
            const service = new GetAllStundentsService(studentRepository);

            const result = await service.execute();

            return resposne.status(200).json(result);

        } catch (error: any) {
            return resposne.status(404).json({ message: error.message });
        }

    }
}

export default new GetAllStudentsController;