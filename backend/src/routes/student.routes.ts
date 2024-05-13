import { Router } from "express";
import { ensuredAuthenticated } from "../middlewares/auth/ensuredAuthenticated";
// import CreateStudentsController from "../controllers/students/CreateStudentsController";
import { uploadImage } from "../middlewares/upload/ImageUpload";
// import UpdateStudentsController from "../controllers/students/UpdateStudentsController";
// import GetStudentsController from "../controllers/students/GetStudentsController";
// import GetAllStudentsController from "../controllers/students/GetAllStudentsController";



const router = Router();

// router.post('/create', ensuredAuthenticated, CreateStudentsController.handle);
// router.get('/getall', GetAllStudentsController.handle);
// router.get('/:id', GetStudentsController.handle);
// router.patch('/:id', ensuredAuthenticated, UpdateStudentsController.handle);




export { router as studentRouter }