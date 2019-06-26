import { Component, OnInit, Input } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

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
    animalsItems: Item[];
    fruitsItems: Item[];
    colorsItems: Item[];

   public isBusy = true;

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
        this.itemService.init();
        this.buildArrays("");

        console.log("called init \n");
    }

    buildArrays(args:any) {
        console.log(" args " + args);

        this.animalsItems = this.itemService.getItemsByCategory("animals");
        this.fruitsItems = this.itemService.getItemsByCategory("fruits");
        this.colorsItems = this.itemService.getItemsByCategory("colors");

        this.isBusy = false;
    }


}