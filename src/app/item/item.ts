import {ImageSource, fromFile, fromResource, fromBase64} from "tns-core-modules/image-source";

export interface Item {
    id: number;
    type: string;
    name: string;
    imgPath: string;
    img: ImageSource;
    videoPath: string;
}
