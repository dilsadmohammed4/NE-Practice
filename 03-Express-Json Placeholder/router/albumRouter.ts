import {Router, Request, Response} from "express";
import * as albumController from "../controller/albumController";


const albumsRouter: Router = Router();
albumsRouter.get("/", async (req: Request, res: Response) => {
    await albumController.getAllAlbums(req, res);
});
albumsRouter.get("/:albumId", async (req: Request, res: Response) => {
    await albumController.getAlbum(req, res);
});
export default albumsRouter;
