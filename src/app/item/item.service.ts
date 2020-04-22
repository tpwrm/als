import { Injectable } from "@angular/core";

import { Item } from "./item.model";
import {ImageSource, fromFile, fromResource, fromBase64} from "tns-core-modules/image-source";
import { knownFolders, Folder, File} from "tns-core-modules/file-system/file-system";
import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array/observable-array";


@Injectable({
    providedIn: "root"
})
export class ItemService {  

    items : Item [] = new Array<Item>();

    init () {
        this.readDefaultJsonSync();
    }

    readDefaultJsonSync() {
        let mediaDir : Folder = <Folder> knownFolders.currentApp().getFolder("media");
        let jsonFile : File = mediaDir.getFile('default-categories.json');

        console.log("mediaDir " + mediaDir.path);
        console.log("jsonFile exists " + File.exists(jsonFile.path));

        mediaDir.getEntities()
        .then((entities) => {
            entities.forEach((entity) => {
                console.log("file in mediDir " + entity.path);
            });
        }).catch((err) => {
            console.log(err.stack);
        });

        if (mediaDir.contains('default-categories.json')) {
            console.log("reading default-categories.json file......");
            let jsonFileText = jsonFile.readTextSync();
            console.log("default-categories.json file readed!");

            console.log("parsing default-categories.json file......");
            let jsonData: Item[] = JSON.parse(jsonFileText);
            console.log("File default-categories.json parsed!");

            jsonData.forEach(element => {
                if (element.disabled == false) {
                    this.items.push(element);
                }
            });
        }
    }

    getAllItems(): Item[] {
        for (let _i = 0; _i < this.items.length; _i++) {
                this.items[_i].img = <ImageSource> fromFile(this.items[_i].imgPath);
                console.log(this.items[_i].imgPath);
        }

        return this.items;
    }

    getItemsByCategory(category:string):Item[] {
        let returnItems = new Array<Item>();

        for (let _i = 0; _i < this.items.length; _i++) {
            if (category == this.items[_i].category) {
                let returmItem:Item = this.items[_i]; 
                returmItem.img = <ImageSource> fromFile(this.items[_i].imgPath);
                console.log(category + "[" + returmItem.imgPath + "] [" + returmItem.videoPath + "]");
                returnItems.push(returmItem);
            }
        }

        return returnItems;
    }

    getItem(id: number): Item {
        return this.getItemInternal(id, this.items);

        //return this.items.filter(item => item.id === id)[0];
    }

    private getItemInternal(id: number, items : Item[]): Item {
        let result : Item = null;

        items.forEach(item => {
            if (result == null) {
                if (item.id === id) {
                    result = item;
                } else if (item.items != null) {
                    result = this.getItemInternal(id, item.items);
                }
            }
        });

        return result;
    }
}
