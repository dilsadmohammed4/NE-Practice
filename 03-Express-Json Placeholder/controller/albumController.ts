import {Request, Response} from "express";
import {albumUtil} from "../util/albumUtil"
import {IAlbum} from "../models/IAlbum";

export const getAllAlbums = async (req: Request, res: Response) => {
    try {
        let albumsData: IAlbum[] = await albumUtil.getAllAlbumsFromDB();
        res.status(200).json(albumsData);
    } catch (e) {
        return res.status(500).json({
            msg: "Server error"
        });
    }
}

export const getAlbum = async (req: Request, res: Response) => {
    try {
        let {albumId} = req.params;
        let albumData: IAlbum | undefined = await albumUtil.getAlbumFromDB(Number(albumId));
        res.status(200).json(albumData);
    } catch (e) {
        return res.status(500).json({
            msg: "Server error"
        });
    }
}