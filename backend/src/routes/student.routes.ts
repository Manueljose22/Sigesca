import { Router } from "express";
import { ensuredAuthenticated } from "../middlewares/auth/ensuredAuthenticated";
import CreateStudentsController from "../controllers/students/CreateStudentsController";
import { uploadImage } from "../middlewares/upload/ImageUpload";
import UpdateStudentsController from "../controllers/students/UpdateStudentsController";
import GetStudentsController from "../controllers/students/GetStudentsController";
import GetAllStudentsController from "../controllers/students/GetAllStudentsController";
import DeleteStudentsController from "../controllers/students/DeleteStudentsController";
import SearchStudentsController from "../controllers/students/SearchStudentsController";
import { StudentMiddleware } from "../middlewares/StudentMiddleware";



const router = Router();

router.post('/create',StudentMiddleware.validatedFields, ensuredAuthenticated, uploadImage.single('foto'), CreateStudentsController.handle);
router.get('/', ensuredAuthenticated,  GetAllStudentsController.handle);
router.get('/:id', ensuredAuthenticated, GetStudentsController.handle);
router.get('/?', ensuredAuthenticated, SearchStudentsController.handle);
router.delete('/:id', ensuredAuthenticated, DeleteStudentsController.handle);
router.put('/:id', ensuredAuthenticated, UpdateStudentsController.handle);




export { router as studentRouter }