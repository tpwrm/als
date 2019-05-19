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
        this.animalItems = this.itemService.getItemsByType("animals");
        this.fruitsItems = this.itemService.getItemsByType("fruits");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBR3pELCtDQUE2QztBQUU3QyxxR0FBcUc7QUFFckc7Ozs7RUFJRTtBQU9GO0lBSUcsZ0NBQWdDO0lBRS9CLDRJQUE0STtJQUM1SSxpSEFBaUg7SUFDakgsd0JBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRXhDOzs7OztVQUtFO0lBQ04sQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQXJCUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQVNtQywwQkFBVztPQVJuQyxjQUFjLENBc0IxQjtJQUFELHFCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuLy9pbXBvcnQgeyBUYWJWaWV3LCBUYWJWaWV3SXRlbSwgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xuXG4vKlxuZXhwb3J0IGNsYXNzIERhdGFJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaXRlbURlc2M6IHN0cmluZykge31cbn1cbiovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBhbmltYWxJdGVtczogSXRlbVtdO1xuICAgIGZydWl0c0l0ZW1zOiBJdGVtW107XG5cbiAgIC8vIHB1YmxpYyB0YWJzOiBBcnJheTxEYXRhSXRlbT47XG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlKSB7IFxuXG4gICAgICAgIC8qXG4gICAgICAgIHRoaXMudGFicyA9IG5ldyBBcnJheTxEYXRhSXRlbT4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudGFicy5wdXNoKG5ldyBEYXRhSXRlbShcInRhYiBcIiArIGkpKTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFuaW1hbEl0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtc0J5VHlwZShcImFuaW1hbHNcIik7XG4gICAgICAgIHRoaXMuZnJ1aXRzSXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zQnlUeXBlKFwiZnJ1aXRzXCIpO1xuICAgIH1cbn0iXX0=