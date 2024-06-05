import { Router } from "express";
import SessionController from "../controllers/session/SessionController";



const router = Router();

router.post('/session', SessionController.handle);


export { router as sessionRouter }