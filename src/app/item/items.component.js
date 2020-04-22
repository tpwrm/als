"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var sound_service_1 = require("./sound.service");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(itemService, soundService) {
        this.itemService = itemService;
        this.soundService = soundService;
        this.isBusy = true;
    }
    ItemsComponent.prototype.onTap = function (event, itemId) {
        //console.log("Event: " + event.eventName + ", sender: " + event.object+ ", item id: " + itemId);
        this.soundService.getSound(itemId).sound.play();
    };
    ItemsComponent.prototype.ngOnInit = function () {
        this.itemService.init();
        this.buildArrays(null);
        this.soundService.init(this.atalkItems);
    };
    ItemsComponent.prototype.buildArrays = function (args) {
        this.atalkItems = this.itemService.getItemsByCategory("atalk");
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
            styles: ["./items.component.css"]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            sound_service_1.SoundService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBR3pELCtDQUE2QztBQUM3QyxpREFBK0M7QUFTL0M7SUFRSSx3QkFBb0IsV0FBd0IsRUFDeEIsWUFBMkI7UUFEM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWU7UUFIeEMsV0FBTSxHQUFHLElBQUksQ0FBQztJQUtyQixDQUFDO0lBRUQsOEJBQUssR0FBTCxVQUFNLEtBQXdCLEVBQUUsTUFBZTtRQUMzQyxpR0FBaUc7UUFDakcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLElBQVE7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUEvQlEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsTUFBTSxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDcEMsQ0FBQzt5Q0FTbUMsMEJBQVc7WUFDVCw0QkFBWTtPQVR0QyxjQUFjLENBZ0MxQjtJQUFELHFCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbS5tb2RlbFwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IFNvdW5kU2VydmljZSB9IGZyb20gXCIuL3NvdW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlczogW1wiLi9pdGVtcy5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBhdGFsa0l0ZW1zOiBJdGVtW107XG4gICAgYW5pbWFsc0l0ZW1zOiBJdGVtW107XG4gICAgZnJ1aXRzSXRlbXM6IEl0ZW1bXTtcbiAgICBjb2xvcnNJdGVtczogSXRlbVtdO1xuXG4gICAgcHVibGljIGlzQnVzeSA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSwgXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBzb3VuZFNlcnZpY2UgOiBTb3VuZFNlcnZpY2VcbiAgICAgICAgICAgICAgICApIHsgXG4gICAgfVxuXG4gICAgb25UYXAoZXZlbnQgOiBHZXN0dXJlRXZlbnREYXRhLCBpdGVtSWQgOiBudW1iZXIpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkV2ZW50OiBcIiArIGV2ZW50LmV2ZW50TmFtZSArIFwiLCBzZW5kZXI6IFwiICsgZXZlbnQub2JqZWN0KyBcIiwgaXRlbSBpZDogXCIgKyBpdGVtSWQpO1xuICAgICAgICB0aGlzLnNvdW5kU2VydmljZS5nZXRTb3VuZChpdGVtSWQpLnNvdW5kLnBsYXkoKTsgICAgICBcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5pbml0KCk7XG4gICAgICAgIHRoaXMuYnVpbGRBcnJheXMobnVsbCk7XG4gICAgICAgIHRoaXMuc291bmRTZXJ2aWNlLmluaXQodGhpcy5hdGFsa0l0ZW1zKTtcbiAgICB9XG5cbiAgICBidWlsZEFycmF5cyhhcmdzOmFueSkge1xuICAgICAgICB0aGlzLmF0YWxrSXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zQnlDYXRlZ29yeShcImF0YWxrXCIpO1xuICAgICAgICB0aGlzLmFuaW1hbHNJdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXNCeUNhdGVnb3J5KFwiYW5pbWFsc1wiKTtcbiAgICAgICAgdGhpcy5mcnVpdHNJdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXNCeUNhdGVnb3J5KFwiZnJ1aXRzXCIpO1xuICAgICAgICB0aGlzLmNvbG9yc0l0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtc0J5Q2F0ZWdvcnkoXCJjb2xvcnNcIik7XG5cbiAgICAgICAgdGhpcy5pc0J1c3kgPSBmYWxzZTtcbiAgICB9XG59Il19