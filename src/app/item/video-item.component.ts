import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';

import { Item } from "./item.model";
import { ItemService } from "./item.service";
import { RouterExtensions } from "nativescript-angular/router";
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
registerElement("VideoPlayer", () => Video);

@Component({
  selector: 'ns-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css'],
  moduleId: module.id,
})
export class VideoItemComponent implements OnInit {
  item: Item;

  constructor(
      private itemService: ItemService,
      private route: ActivatedRoute,
      private routerExtensions: RouterExtensions
  ) { }

  ngOnInit(): void {
      //const id = +this.route.snapshot.params["id"];
      //this.item = this.itemService.getItem(id);

      this.route.params.subscribe(routeParams => {
        this.item = this.itemService.getItem(parseInt(routeParams.id));
      });
  }

  videoFinished(event) { 
    this.routerExtensions.backToPreviousPage();
   } 

}
