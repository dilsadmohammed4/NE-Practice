import express, {Application, Request, Response} from "express";

const hostName: string = "127.0.0.1";
const port: number = 9090;

const app: Application = express();
app.get("/", (req: Request, res: Response) => {
    res.status(200);
    res.json({
        msg: "Welcome to Express Server...."
    });
});


app.listen(port, hostName, () => {
    console.log(`Server started on Host ${hostName}:${port}`)
})