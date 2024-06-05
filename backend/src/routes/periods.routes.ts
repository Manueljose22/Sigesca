import { Router } from "express";
import CreatePeriodsController from "../controllers/periods/CreatePeriodsController";
import { ensuredAuthenticated } from "../middlewares/auth/ensuredAuthenticated";



const router = Router();

router.post('/register', ensuredAuthenticated, CreatePeriodsController.handle);


export { router as periodsRouter }