import jsonfile from "jsonfile";
import path from "path";
import {IPhoto} from "../models/IPhoto";

export class photoUtil {

    private static photosJsonPath = path.join(__dirname, "..", "db", "photos.json");

    public static getAllPhotosFromDB(): Promise<IPhoto[]> {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.photosJsonPath, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data);
                }
            })
        })
    }

    public static getPhotoFromDB(photoId: number): Promise<IPhoto | undefined> {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.photosJsonPath, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    const photosList: IPhoto[] = data;
                    const photo: IPhoto | undefined = photosList.find(item => item.id === photoId);
                    resolve(photo);
                }
            })
        })
    }
}