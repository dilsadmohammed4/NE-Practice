import {Request, Response} from "express";
import {photoUtil} from "../util/photoUtil"
import {IPhoto} from "../models/IPhoto";

export const getAllPhotos = async (req: Request, res: Response) => {
    try {
        let photosData: IPhoto[] = await photoUtil.getAllPhotosFromDB();
        res.status(200).json(photosData);
    } catch (e) {
        return res.status(500).json({
            msg: "Server error"
        });
    }
}

export const getPhoto = async (req: Request, res: Response) => {
    try {
        let {photoId} = req.params;
        let photoData: IPhoto | undefined = await photoUtil.getPhotoFromDB(Number(photoId));
        res.status(200).json(photoData);
    } catch (e) {
        return res.status(500).json({
            msg: "Server error"
        });
    }
}