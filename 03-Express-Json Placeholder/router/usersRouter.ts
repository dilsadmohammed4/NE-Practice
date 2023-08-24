import {Router, Request, Response} from "express";
import {userUtil} from "../util/userUtil"
import {IUser} from "../models/IUser";
import * as userController from "../controller/userController";


const usersRouter: Router = Router();
usersRouter.get("/", async (req: Request, res: Response) => {
    await userController.getAllUsers(req, res);
});
usersRouter.get("/:userId", async (req: Request, res: Response) => {
    await userController.getUser(req, res);
});
export default usersRouter;
