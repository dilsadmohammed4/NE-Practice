import express, {Application, Request, Response} from "express";
import usersRouter from "./router/usersRouter";
import photosRouter from "./router/photosRouter";
import albumsRouter from "./router/albumRouter";
import commentsRouter from "./router/commentRouter";

const hostName: string = "127.0.0.1";
const port: number = 9090;

const app: Application = express();
app.get("/", (req: Request, res: Response) => {
    res.status(200);
    res.json({
        msg: "Welcome to Express Server...."
    });
});

//Router configuration

app.use("/api/users", usersRouter)
app.use("/api/photos", photosRouter)
app.use("/api/albums", albumsRouter)
app.use("/api/comments", commentsRouter)

app.listen(port, hostName, () => {
    console.log(`Server started on Host ${hostName}:${port}`)
})