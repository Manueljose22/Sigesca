import { Request, Response } from 'express';
import { StudentsRepository } from '../../repositories/studants/StudentsRepository';
import { DeleteStudentsservice } from '../../services/students/DeleteStudentsservice';




class DeleteStudentsController {

    async handle(request: Request, response: Response) {

        const { id } = request.params;

        try {

            const studentRepository = new StudentsRepository();
            const service = new DeleteStudentsservice(studentRepository);

            const result = await service.execute(id);

            return response.json({ message: 'Registro eliminado com sucesso!' });

        } catch (error: any) {

            return response.status(400).json({ message: error.message });
        }


    }
}

export default new DeleteStudentsController;