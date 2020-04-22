import { Component, OnInit, Input } from "@angular/core";

import { Item } from "./item.model";
import { ItemService } from "./item.service";
import { SoundService } from "./sound.service";
import { GestureEventData } from "tns-core-modules/ui/gestures";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styles: ["./items.component.css"]
})
export class ItemsComponent implements OnInit {
    atalkItems: Item[];
    animalsItems: Item[];
    fruitsItems: Item[];
    colorsItems: Item[];

    public isBusy = true;

    constructor(private itemService: ItemService, 
                private soundService : SoundService
                ) { 
    }

    onTap(event : GestureEventData, itemId : number) {
        //console.log("Event: " + event.eventName + ", sender: " + event.object+ ", item id: " + itemId);
        this.soundService.getSound(itemId).sound.play();      
    }

    ngOnInit(): void {
        this.itemService.init();
        this.buildArrays(null);
        this.soundService.init(this.atalkItems);
    }

    buildArrays(args:any) {
        this.atalkItems = this.itemService.getItemsByCategory("atalk");
        this.animalsItems = this.itemService.getItemsByCategory("animals");
        this.fruitsItems = this.itemService.getItemsByCategory("fruits");
        this.colorsItems = this.itemService.getItemsByCategory("colors");

        this.isBusy = false;
    }
}