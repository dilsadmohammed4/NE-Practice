import {Request, Response} from "express";
import {commentUtil} from "../util/commentUtil"
import {IComment} from "../models/IComment";

export const getAllComments = async (req: Request, res: Response) => {
    try {
        let commentsData: IComment[] = await commentUtil.getAllCommentsFromDB();
        res.status(200).json(commentsData);
    } catch (e) {
        return res.status(500).json({
            msg: "Server error"
        });
    }
}

export const getComment = async (req: Request, res: Response) => {
    try {
        let {commentId} = req.params;
        let commentData: IComment | undefined = await commentUtil.getCommentFromDB(Number(commentId));
        res.status(200).json(commentData);
    } catch (e) {
        return res.status(500).json({
            msg: "Server error"
        });
    }
}