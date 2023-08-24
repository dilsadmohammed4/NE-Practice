import jsonfile from "jsonfile";
import path from "path";
import {IAlbum} from "../models/IAlbum";

export class albumUtil {

    private static albumsJsonPath = path.join(__dirname, "..", "db", "albums.json");

    public static getAllAlbumsFromDB(): Promise<IAlbum[]> {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.albumsJsonPath, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data);
                }
            })
        })
    }

    public static getAlbumFromDB(albumId: number): Promise<IAlbum | undefined> {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.albumsJsonPath, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    const albumsList: IAlbum[] = data;
                    const album: IAlbum | undefined = albumsList.find(item => item.id === albumId);
                    resolve(album);
                }
            })
        })
    }
}