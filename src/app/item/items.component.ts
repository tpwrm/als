import { Component, OnInit, Input } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

//import { TabView, TabViewItem, SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";

/*
export class DataItem {
    constructor(public itemDesc: string) {}
}
*/

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    animalItems: Item[];
    fruitsItems: Item[];

   // public tabs: Array<DataItem>;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { 

        /*
        this.tabs = new Array<DataItem>();
        for (let i = 0; i < 5; i++) {
            this.tabs.push(new DataItem("tab " + i));
        }
        */
    }

    ngOnInit(): void {
        this.animalItems = this.itemService.getItemsByType("animals");
        this.fruitsItems = this.itemService.getItemsByType("fruits");
    }
}