import {Request, Response} from "express";
import {userUtil} from "../util/userUtil"
import {IUser} from "../models/IUser";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        let usersData: IUser[] = await userUtil.getAllUsersFromDB();
        res.status(200).json(usersData);
    } catch (e) {
        return res.status(500).json({
            msg: "Server error"
        });
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        let {userId} = req.params;
        let usersData: IUser | undefined = await userUtil.getUserFromDB(Number(userId));
        res.status(200).json(usersData);
    } catch (e) {
        return res.status(500).json({
            msg: "Server error"
        });
    }
}