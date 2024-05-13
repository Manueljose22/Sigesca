import { Router } from "express";
// import { usersRouter } from "./users.routes";
import { studentRouter } from "./student.routes";
import { classRouter } from "./class.routes";
// import { sessionRouter } from "./session.routes";




const routes = Router();

// routes.use('/users', usersRouter);
routes.use('/students', studentRouter);
routes.use('/class', classRouter);
// routes.use('/session', sessionRouter);






export { routes };