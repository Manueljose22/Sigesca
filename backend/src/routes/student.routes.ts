import { Router } from "express";
import { ensuredAuthenticated } from "../middlewares/auth/ensuredAuthenticated";
import CreateStudentsController from "../controllers/students/CreateStudentsController";
import { StudentMiddleware } from "../middlewares/StudentMiddleware";
import { uploadImage } from "../middlewares/upload/ImageUpload";
import UpdateStudentsController from "../controllers/students/UpdateStudentsController";
import GetStudentsController from "../controllers/students/GetStudentsController";
import GetAllStudentsController from "../controllers/students/GetAllStudentsController";
import DeleteStudentsController from "../controllers/students/DeleteStudentsController";
import SearchStudentsController from "../controllers/students/SearchStudentsController";



const router = Router();

router.post('/create', ensuredAuthenticated, StudentMiddleware.validatedFields, uploadImage.single('foto'), CreateStudentsController.handle);
router.get('/getall', ensuredAuthenticated,  GetAllStudentsController.handle);
router.get('/:id', ensuredAuthenticated, GetStudentsController.handle);
router.get('/?', ensuredAuthenticated, SearchStudentsController.handle);
router.delete('/:id', ensuredAuthenticated, DeleteStudentsController.handle);
router.put('/:id', ensuredAuthenticated, UpdateStudentsController.handle);




export { router as studentRouter }