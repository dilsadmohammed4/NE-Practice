import express, {Application, Request, Response} from "express";
import usersRouter from "./router/usersRouter";
import dotenv from "dotenv";
import {logMiddleware} from "./middleware/logMiddleware";

const app: Application = express();

//configure express to read the .env
dotenv.config({
    path: "./.env"
})

const hostName: string | undefined = process.env.SERVER_HOST_NAME;
const port: string | undefined = process.env.SERVER_PORT_NAME;

//configure express to read the form data / body
app.use(express.json());

app.use(logMiddleware);

app.get("/", (req: Request, res: Response) => {
    res.status(200);
    res.json({
        msg: "Welcome to Express Server...."
    });
});

//Router configuration

app.use("/api/users", usersRouter)

if (hostName && port) {
    app.listen(Number(port), hostName, () => {
        console.log(`Server started on Host ${hostName}:${port}`)
    })
}

