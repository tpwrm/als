"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
//import { TabView, TabViewItem, SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
/*
export class DataItem {
    constructor(public itemDesc: string) {}
}
*/
var ItemsComponent = /** @class */ (function () {
    // public tabs: Array<DataItem>;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
        /*
        this.tabs = new Array<DataItem>();
        for (let i = 0; i < 5; i++) {
            this.tabs.push(new DataItem("tab " + i));
        }
        */
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.animalsItems = this.itemService.getItemsByType("animals");
        this.fruitsItems = this.itemService.getItemsByType("fruits");
        this.colorsItems = this.itemService.getItemsByType("colors");
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBR3pELCtDQUE2QztBQUU3QyxxR0FBcUc7QUFFckc7Ozs7RUFJRTtBQU9GO0lBS0csZ0NBQWdDO0lBRS9CLDRJQUE0STtJQUM1SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRXhDOzs7OztVQUtFO0lBQ04sQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBdkJRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBVW1DLDBCQUFXO09BVG5DLGNBQWMsQ0F3QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuXG4vL2ltcG9ydCB7IFRhYlZpZXcsIFRhYlZpZXdJdGVtLCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XG5cbi8qXG5leHBvcnQgY2xhc3MgRGF0YUl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpdGVtRGVzYzogc3RyaW5nKSB7fVxufVxuKi9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGFuaW1hbHNJdGVtczogSXRlbVtdO1xuICAgIGZydWl0c0l0ZW1zOiBJdGVtW107XG4gICAgY29sb3JzSXRlbXM6IEl0ZW1bXTtcblxuICAgLy8gcHVibGljIHRhYnM6IEFycmF5PERhdGFJdGVtPjtcblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgXG5cbiAgICAgICAgLypcbiAgICAgICAgdGhpcy50YWJzID0gbmV3IEFycmF5PERhdGFJdGVtPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy50YWJzLnB1c2gobmV3IERhdGFJdGVtKFwidGFiIFwiICsgaSkpO1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5pbWFsc0l0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtc0J5VHlwZShcImFuaW1hbHNcIik7XG4gICAgICAgIHRoaXMuZnJ1aXRzSXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zQnlUeXBlKFwiZnJ1aXRzXCIpO1xuICAgICAgICB0aGlzLmNvbG9yc0l0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtc0J5VHlwZShcImNvbG9yc1wiKTtcbiAgICB9XG59Il19