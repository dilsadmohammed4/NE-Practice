import {NextFunction, Request, Response} from "express";

export const logMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const url = request.url;
    const method = request.method;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    console.log(`URL:${url} METHOD:${method} DATE:${date} TIME:${time}`);
    next();
}