import { Router } from "express";
import CreatePeriodsController from "../controllers/periods/CreatePeriodsController";
import { ensuredAuthenticated } from "../middlewares/auth/ensuredAuthenticated";
import GetPeriodsByIdController from "../controllers/periods/GetPeriodsByIdController";
import GetAllPeriodsController from "../controllers/periods/GetAllPeriodsController";
import DeletePeriodsController from "../controllers/periods/DeletePeriodsController";
import UpdatePeriodsController from "../controllers/periods/UpdatePeriodsController";



const router = Router();

router.post('/register', ensuredAuthenticated, CreatePeriodsController.handle);
router.get('/:id', ensuredAuthenticated, GetPeriodsByIdController.handle);
router.get('/', ensuredAuthenticated, GetAllPeriodsController.handle);
router.delete('/:id', ensuredAuthenticated, DeletePeriodsController.handle);
router.put('/:id', ensuredAuthenticated, UpdatePeriodsController.handle);


export { router as periodsRouter }