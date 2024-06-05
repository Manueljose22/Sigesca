import { Request, Response } from "express";
import { StudentsRepository } from "../../repositories/StudentsRepository";
import { UpdateStudentsService } from "../../services/students/UpdateStudentsService";



class UpdateStudentsContoller {

    async handle(request: Request, response: Response) {

        const data = request.body;
        const { id } = request.params;

        try {

            const studentRepository = new StudentsRepository();
            const updateStudentsService = new UpdateStudentsService(studentRepository);

            const result = await updateStudentsService.execute(id, data);

            return response.status(200).json({ message: 'Dados actualizados com sucesso!' });

        } catch (error: any) {

            return response.status(400).json({ message: error.message });
        }

    }
}

export default new UpdateStudentsContoller;