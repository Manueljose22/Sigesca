import { Request, Response } from "express";
import { CreateStudentsService } from "../../services/students/CreateStudentsService";
import { StudentsRepository } from "../../repositories/StudentsRepository";


class CreateStudentsController {

    async handle(request: Request, response: Response) {
        
        const { body } = request;

        if (request.file) {
            body.foto = request.file.filename;
        }

        try {

            const studentRepository = new StudentsRepository();
            const service = new CreateStudentsService(studentRepository);

            const result = await service.execute(body);

            return response.status(201).json({ message: 'Cadastro feito com sucesso!' });

        } catch (error: any) {

            return response.status(400).json({ message: error.message });
        }

    }
}

export default new CreateStudentsController;

