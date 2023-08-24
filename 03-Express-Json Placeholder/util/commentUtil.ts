import jsonfile from "jsonfile";
import path from "path";
import {IComment} from "../models/IComment";

export class commentUtil {

    private static commentsJsonPath = path.join(__dirname, "..", "db", "comments.json");

    public static getAllCommentsFromDB(): Promise<IComment[]> {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.commentsJsonPath, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data);
                }
            })
        })
    }

    public static getCommentFromDB(commentId: number): Promise<IComment | undefined> {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.commentsJsonPath, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    const commentsList: IComment[] = data;
                    const album: IComment | undefined = commentsList.find(item => item.id === commentId);
                    resolve(album);
                }
            })
        })
    }
}