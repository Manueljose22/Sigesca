// import { Router } from "express";
// import CreateUserController from "../controllers/users/CreateUserController";
// import ListUserController from "../controllers/users/ListUserController";
// import DeleteUsersController from "../controllers/users/DeleteUsersController";
// import UpdateUsersController from "../controllers/users/UpdateUsersController";
// import { UserMiddleware } from "../middlewares/UserMiddleware";
// import { ensuredAuthenticated } from "../middlewares/auth/ensuredAuthenticated";

// const router = Router();


// router.post('/create', ensuredAuthenticated, UserMiddleware.validatedFields, CreateUserController.handle);
// router.get('/getAll', ListUserController.handle);
// router.delete('/:id',ensuredAuthenticated, DeleteUsersController.handle);
// router.patch('/:id',ensuredAuthenticated, UpdateUsersController.handle);


// export { router as usersRouter }