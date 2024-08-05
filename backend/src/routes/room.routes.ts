import { Router } from "express";
import { ensuredAuthenticated } from "../middlewares/auth/ensuredAuthenticated";
import CreateRoomController from "../controllers/room/CreateRoomController";
import GetRoomByIdController from "../controllers/room/GetRoomByIdController";
import GetAllRoomController from "../controllers/room/GetAllRoomController";
import DeleteRoomController from "../controllers/room/DeleteRoomController";
import UpdateRoomController from "../controllers/room/UpdateRoomController";


const router = Router();

router.post('/register', ensuredAuthenticated, CreateRoomController.handle);
router.get('/:id', ensuredAuthenticated, GetRoomByIdController.handle);
router.get('/', ensuredAuthenticated, GetAllRoomController.handle);
router.delete('/:id', ensuredAuthenticated, DeleteRoomController.handle);
router.put('/:id', ensuredAuthenticated, UpdateRoomController.handle);



export { router as roomRouter }