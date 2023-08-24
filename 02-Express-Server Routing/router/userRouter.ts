import express, {Router, Request, Response, query} from "express";

const userRouter: Router = Router();
userRouter.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        msg: "From user router",
        path: req.baseUrl,
        method: req.method,
    });
});
userRouter.get(
    "/search",
    (req: Request, res: Response) => {
        const {language, version} = req.query;
        if (language && version) {
            res.status(200).json({
                msg: "From user router",
                path: req.baseUrl,
                method: req.method,
                query: {language, version},
            });
        } else {
            res.status(400).json({
                msg: "Invalid query"
            })
        }
    }
);

userRouter.get("/:userId", (req: Request, res: Response) => {
    const {userId} = req.params;
    res.status(200).json({
        msg: "From user router",
        path: req.baseUrl,
        method: req.method,
        userId: userId,
    });
});

export default userRouter;
