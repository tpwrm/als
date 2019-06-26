import {ImageSource, fromFile, fromResource, fromBase64} from "tns-core-modules/image-source";

export interface Item {
    id: number;
    category: string;
    name: string;
    imgType: string;
    imgPath: string;
    img: ImageSource;
    videoPath: string;
}
