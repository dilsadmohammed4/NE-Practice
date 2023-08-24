import {Router, Request, Response} from "express";
import * as commentController from "../controller/commentController";


const commentsRouter: Router = Router();
commentsRouter.get("/", async (req: Request, res: Response) => {
    await commentController.getAllComments(req, res);
});
commentsRouter.get("/:commentId", async (req: Request, res: Response) => {
    await commentController.getComment(req, res);
});
export default commentsRouter;
