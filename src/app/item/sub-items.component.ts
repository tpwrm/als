import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from './item.model';
import { GestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { SoundService } from './sound.service';
import { RouterExtensions } from "nativescript-angular/router";
import { Page, NavigatedData} from "tns-core-modules/ui/page";

@Component({
  selector: 'ns-sub-items',
  templateUrl: './sub-items.component.html',
  styleUrls: ['./sub-items.component.css'],
  moduleId: module.id
})
export class SubItemsComponent implements OnInit {
  items: Item[];

  constructor(
      private itemService: ItemService,
      private soundService: SoundService,
      private route: ActivatedRoute, 
      private routerExtensions: RouterExtensions,
      private page : Page
  ) { }

  onTap(event : GestureEventData, itemId : number) {
    //console.log("Event: " + event.eventName + ", sender: " + event.object+ ", item id: " + itemId);

    this.soundService.getSound(itemId).sound.play();      
  }

  onLoad(id : string) {
    this.items = this.itemService.getItem(parseInt(id)).items;

    if (this.items == null || this.items.length == 0) {
      this.routerExtensions.backToPreviousPage();
    }
  }

  ngOnInit(): void {    
    this.route.params.subscribe(routeParams => {
      this.onLoad(routeParams.id);
    });

    this.page.on("navigatingFrom", (args : NavigatedData) => {
      if (args.isBackNavigation) {
        this.routerExtensions.backToPreviousPage();
      }
    });
      
  }

}
