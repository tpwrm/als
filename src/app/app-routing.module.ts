import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { VideoItemComponent } from "./item/video-item.component";
import { SubItemsComponent } from "./item/sub-items.component";

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "video/:id", component: VideoItemComponent },
    { path: "sub-items/:id", component: SubItemsComponent,  runGuardsAndResolvers: "paramsOrQueryParamsChange"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }