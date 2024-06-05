import { Request, Response } from 'express';
import { StudentsRepository } from '../../repositories/StudentsRepository';
import { SearchStudentsSevice } from '../../services/students/SearchStudentsController';




class SearchStudentsController {

    async handle(request: Request, response: Response) {

        const { search } = request.query as { search: string }

        try {

            const studentRepository = new StudentsRepository();
            const service = new SearchStudentsSevice(studentRepository);

            const result = await service.execute(search);

            return response.status(200).json(result);

        } catch (error: any) {

            return response.status(400).json({ message: error.message });
        }




    }
}

export default new SearchStudentsController;