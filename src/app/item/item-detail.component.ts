import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { Item } from "./item";
import { ItemService } from "./item.service";

import { Folder, path, File } from "file-system";
import { knownFolders } from "file-system";

import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
registerElement("VideoPlayer", () => Video);

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);

        /*
        const documents : Folder = <Folder> knownFolders.documents();
        const folderApp : Folder = <Folder> knownFolders.currentApp();
        const parentFolderApp : Folder = <Folder> folderApp.parent;

        const folderAppChildPath = path.join(folderApp.path, "app");

        var folderAppChild : Folder = null;

        console.log("App path " + folderApp.path);
        console.log("Documents path " + documents.path);
        
        if (File.exists(folderAppChildPath)) {
            console.log("Exist " + folderAppChildPath);
            folderAppChild = <Folder>folderApp.getFolder("app");
            console.log("folderAppChild path " + folderAppChild.path);
        }

        folderApp.getEntities().then(
            (entities) => {
                entities.forEach(
                    (entity) => {
                        console.log("Entity " + entity.name);
                    }
                )
            }
            ).catch ((err) => {
                console.error(err.stack);
            }
        )
        */
    }

    videoFinished(event) { 
        this.location.back();
     } 
}
