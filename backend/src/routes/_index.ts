import { Router } from "express";
import { studentRouter } from "./student.routes";
import { roomRouter } from "./room.routes";
import { sessionRouter } from "./session.routes";
import { periodsRouter } from "./periods.routes";
import { levelRouter } from "./level.routes";




const routes = Router();

routes.use('/students', studentRouter);
routes.use('/room', roomRouter);
routes.use(sessionRouter);
routes.use('/periods', periodsRouter);
routes.use('/level', levelRouter);






export { routes };