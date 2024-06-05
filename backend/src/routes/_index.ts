import { Router } from "express";
import { studentRouter } from "./student.routes";
import { classRouter } from "./class.routes";
import { sessionRouter } from "./session.routes";
import { periodsRouter } from "./periods.routes";




const routes = Router();

routes.use('/students', studentRouter);
routes.use('/class', classRouter);
routes.use(sessionRouter);
routes.use('/periods', periodsRouter);






export { routes };