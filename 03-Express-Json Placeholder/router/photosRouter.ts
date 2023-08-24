import {Router, Request, Response} from "express";
import * as photoController from "../controller/photoController";


const photosRouter: Router = Router();
photosRouter.get("/", async (req: Request, res: Response) => {
    await photoController.getAllPhotos(req, res);
});
photosRouter.get("/:photoId", async (req: Request, res: Response) => {
    await photoController.getPhoto(req, res);
});
export default photosRouter;
