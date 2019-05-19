import { Injectable } from "@angular/core";

import { Item } from "./item";
import {ImageSource, fromFile, fromResource, fromBase64} from "tns-core-modules/image-source";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    
    private items = new Array<Item>(
        { id: 1, type: "fruits", name: "Mela", imgPath: "~/media/images/fruits/mela.jpg", img: null, videoPath: "~/media/videos/mela.mp4" },
        { id: 2, type: "animals", name: "Mucca", imgPath: "~/media/images/animals/mucca.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 3, type: "animals", name: "Gatto", imgPath: "~/media/images/animals/gatto.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 4, type: "animals", name: "Cane", imgPath: "~/media/images/animals/cane.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 5, type: "animals", name: "Gallina", imgPath: "~/media/images/animals/gallina.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 6, type: "animals", name: "Maiale", imgPath: "~/media/images/animals/maiale.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 7, type: "animals", name: "Pecora", imgPath: "~/media/images/animals/pecora.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 8, type: "animals", name: "Pecora", imgPath: "~/media/images/animals/cavallo.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 9, type: "animals", name: "Pecora", imgPath: "~/media/images/animals/elefante.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 10, type: "animals", name: "Pecora", imgPath: "~/media/images/animals/leone.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
    );

    getAllItems(): Item[] {
        for (let _i = 0; _i < this.items.length; _i++) {
            this.items[_i].img = <ImageSource> fromFile(this.items[_i].imgPath);
            console.log(this.items[_i].imgPath);
        }

        return this.items;
    }

    getItemsByType(type:string):Item[] {
        let returnItems = new Array<Item>();

        for (let _i = 0; _i < this.items.length; _i++) {
            if (type == this.items[_i].type) {
                let returmItem:Item = this.items[_i]; 
                returmItem.img = <ImageSource> fromFile(this.items[_i].imgPath);
                console.log(type + "[" + returmItem.imgPath + "] [" + returmItem.videoPath + "]");
                returnItems.push(returmItem);
            }
        }

        return returnItems;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
