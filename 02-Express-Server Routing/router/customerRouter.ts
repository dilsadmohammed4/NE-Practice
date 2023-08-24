import express, {Router, Request, Response} from "express";

const customerRouter: Router = Router();
customerRouter.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        msg: "From customer router",
        path: req.baseUrl,
        method: req.method
    })
})

export default customerRouter;