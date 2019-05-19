import { Injectable } from "@angular/core";

import { Item } from "./item";
import {ImageSource, fromFile, fromResource, fromBase64} from "tns-core-modules/image-source";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    
    private items = new Array<Item>(
        { id: 1, type: "fruits", name: "Mela", imgPath: "~/media/images/fruits/mela.png", img: null, videoPath: "~/media/videos/mela.mp4" },
        { id: 2, type: "fruits", name: "Banana", imgPath: "~/media/images/fruits/banana.png", img: null, videoPath: "~/media/videos/mela.mp4" },
        { id: 3, type: "fruits", name: "Pera", imgPath: "~/media/images/fruits/pera.png", img: null, videoPath: "~/media/videos/mela.mp4" },
        { id: 4, type: "fruits", name: "Uva", imgPath: "~/media/images/fruits/uva.png", img: null, videoPath: "~/media/videos/mela.mp4" },
        { id: 5, type: "fruits", name: "Arancia", imgPath: "~/media/images/fruits/arancia.png", img: null, videoPath: "~/media/videos/mela.mp4" },
        { id: 6, type: "fruits", name: "Fragola", imgPath: "~/media/images/fruits/fragola.png", img: null, videoPath: "~/media/videos/mela.mp4" },
        { id: 7, type: "fruits", name: "Limone", imgPath: "~/media/images/fruits/limone.png", img: null, videoPath: "~/media/videos/mela.mp4" },
        { id: 8, type: "fruits", name: "Cilieggie", imgPath: "~/media/images/fruits/ciliegge.png", img: null, videoPath: "~/media/videos/mela.mp4" },

        { id: 9, type: "animals", name: "Mucca", imgPath: "~/media/images/animals/mucca.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 10, type: "animals", name: "Gatto", imgPath: "~/media/images/animals/gatto.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 11, type: "animals", name: "Cane", imgPath: "~/media/images/animals/cane.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 12, type: "animals", name: "Gallina", imgPath: "~/media/images/animals/gallina.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 13, type: "animals", name: "Maiale", imgPath: "~/media/images/animals/maiale.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 14, type: "animals", name: "Pecora", imgPath: "~/media/images/animals/pecora.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 15, type: "animals", name: "Pecora", imgPath: "~/media/images/animals/cavallo.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 16, type: "animals", name: "Pecora", imgPath: "~/media/images/animals/elefante.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 18, type: "animals", name: "Pecora", imgPath: "~/media/images/animals/leone.png", img: null, videoPath: "~/media/videos/mucca.mp4" },

        { id: 19, type: "colors", name: "Rosso", imgPath: "~/media/images/colors/rosso.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 20, type: "colors", name: "Giallo", imgPath: "~/media/images/colors/giallo.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 21, type: "colors", name: "Blu", imgPath: "~/media/images/colors/blu.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 22, type: "colors", name: "Arancio", imgPath: "~/media/images/colors/arancio.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        { id: 23, type: "colors", name: "Verde", imgPath: "~/media/images/colors/verde.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
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
