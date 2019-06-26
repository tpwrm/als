"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
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
        this.isBusy = true;
        /*
        this.tabs = new Array<DataItem>();
        for (let i = 0; i < 5; i++) {
            this.tabs.push(new DataItem("tab " + i));
        }
        */
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.readJson().on(observable_array_1.ObservableArray.changeEvent, function (args) { return _this.buildArrays(args); });
        console.log("called init \n");
    };
    ItemsComponent.prototype.buildArrays = function (args) {
        console.log(" args " + args);
        this.animalsItems = this.itemService.getItemsByCategory("animals");
        this.fruitsItems = this.itemService.getItemsByCategory("fruits");
        this.colorsItems = this.itemService.getItemsByCategory("colors");
        this.isBusy = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBR3pELCtDQUE2QztBQUM3Qyw0RkFBMEY7QUFFMUYscUdBQXFHO0FBRXJHOzs7O0VBSUU7QUFPRjtJQU9HLGdDQUFnQztJQUUvQiw0SUFBNEk7SUFDNUksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQU50QyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBUWhCOzs7OztVQUtFO0lBQ04sQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLGtDQUFlLENBQUMsV0FBVyxFQUFFLFVBQUMsSUFBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBRWxHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLElBQVE7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFakUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQW5DUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQVltQywwQkFBVztPQVhuQyxjQUFjLENBc0MxQjtJQUFELHFCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5XCI7XG5cbi8vaW1wb3J0IHsgVGFiVmlldywgVGFiVmlld0l0ZW0sIFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcblxuLypcbmV4cG9ydCBjbGFzcyBEYXRhSXRlbSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGl0ZW1EZXNjOiBzdHJpbmcpIHt9XG59XG4qL1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYW5pbWFsc0l0ZW1zOiBJdGVtW107XG4gICAgZnJ1aXRzSXRlbXM6IEl0ZW1bXTtcbiAgICBjb2xvcnNJdGVtczogSXRlbVtdO1xuXG4gICBwdWJsaWMgaXNCdXN5ID0gdHJ1ZTtcblxuICAgLy8gcHVibGljIHRhYnM6IEFycmF5PERhdGFJdGVtPjtcblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy5cbiAgICAvLyBBbmd1bGFyIGtub3dzIGFib3V0IHRoaXMgc2VydmljZSBiZWNhdXNlIGl0IGlzIGluY2x1ZGVkIGluIHlvdXIgYXBw4oCZcyBtYWluIE5nTW9kdWxlLCBkZWZpbmVkIGluIGFwcC5tb2R1bGUudHMuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgXG5cbiAgICAgICAgLypcbiAgICAgICAgdGhpcy50YWJzID0gbmV3IEFycmF5PERhdGFJdGVtPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy50YWJzLnB1c2gobmV3IERhdGFJdGVtKFwidGFiIFwiICsgaSkpO1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbVNlcnZpY2UucmVhZEpzb24oKS5vbihPYnNlcnZhYmxlQXJyYXkuY2hhbmdlRXZlbnQsIChhcmdzOmFueSkgPT4gdGhpcy5idWlsZEFycmF5cyhhcmdzKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJjYWxsZWQgaW5pdCBcXG5cIik7XG4gICAgfVxuXG4gICAgYnVpbGRBcnJheXMoYXJnczphbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCIgYXJncyBcIiArIGFyZ3MpO1xuXG4gICAgICAgIHRoaXMuYW5pbWFsc0l0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtc0J5Q2F0ZWdvcnkoXCJhbmltYWxzXCIpO1xuICAgICAgICB0aGlzLmZydWl0c0l0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtc0J5Q2F0ZWdvcnkoXCJmcnVpdHNcIik7XG4gICAgICAgIHRoaXMuY29sb3JzSXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zQnlDYXRlZ29yeShcImNvbG9yc1wiKTtcblxuICAgICAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xuICAgIH1cblxuXG59Il19