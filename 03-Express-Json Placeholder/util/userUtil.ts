import jsonfile from "jsonfile";
import path from "path";
import {IUser} from "../models/IUser";

export class userUtil {

    private static usersJsonPath = path.join(__dirname, "..", "db", "users.json");

    public static getAllUsersFromDB(): Promise<IUser[]> {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.usersJsonPath, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data);
                }
            })
        })
    }

    public static getUserFromDB(userId: number): Promise<IUser | undefined> {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.usersJsonPath, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    const usersList: IUser[] = data;
                    const user: IUser | undefined = usersList.find(item => item.id === userId);
                    resolve(user);
                }
            })
        })
    }
}