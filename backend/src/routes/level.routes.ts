import { Router } from "express";
import { ensuredAuthenticated } from "../middlewares/auth/ensuredAuthenticated";
import CreateLevelController from "../controllers/level/CreateLevelController";
import GetAllLevelController from "../controllers/level/GetAllLevelController";
import GetLevelByIdController from "../controllers/level/GetLevelByIdController";
import DeleteLevelController from "../controllers/level/DeleteLevelController";
import UpadateLevelController from "../controllers/level/UpadateLevelController";



const router = Router();


router.post('/register', ensuredAuthenticated, CreateLevelController.handle);
router.get('/', ensuredAuthenticated, GetAllLevelController.handle);
router.get('/:id', ensuredAuthenticated, GetLevelByIdController.handle);
router.put('/:id', ensuredAuthenticated, UpadateLevelController.handle);
router.delete('/:id', ensuredAuthenticated, DeleteLevelController.handle);



export { router as levelRouter }