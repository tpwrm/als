"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var router_1 = require("@angular/router");
var sound_service_1 = require("./sound.service");
var router_2 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var SubItemsComponent = /** @class */ (function () {
    function SubItemsComponent(itemService, soundService, route, routerExtensions, page) {
        this.itemService = itemService;
        this.soundService = soundService;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.page = page;
    }
    SubItemsComponent.prototype.onTap = function (event, itemId) {
        //console.log("Event: " + event.eventName + ", sender: " + event.object+ ", item id: " + itemId);
        this.soundService.getSound(itemId).sound.play();
    };
    SubItemsComponent.prototype.onLoad = function (id) {
        this.items = this.itemService.getItem(parseInt(id)).items;
        if (this.items == null || this.items.length == 0) {
            this.routerExtensions.backToPreviousPage();
        }
    };
    SubItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (routeParams) {
            _this.onLoad(routeParams.id);
        });
        this.page.on("navigatingFrom", function (args) {
            if (args.isBackNavigation) {
                _this.routerExtensions.backToPreviousPage();
            }
        });
    };
    SubItemsComponent = __decorate([
        core_1.Component({
            selector: 'ns-sub-items',
            templateUrl: './sub-items.component.html',
            styleUrls: ['./sub-items.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            sound_service_1.SoundService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions,
            page_1.Page])
    ], SubItemsComponent);
    return SubItemsComponent;
}());
exports.SubItemsComponent = SubItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1Yi1pdGVtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsK0NBQTZDO0FBQzdDLDBDQUF5RDtBQUd6RCxpREFBK0M7QUFDL0Msc0RBQStEO0FBQy9ELGlEQUE4RDtBQVE5RDtJQUdFLDJCQUNZLFdBQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLEtBQXFCLEVBQ3JCLGdCQUFrQyxFQUNsQyxJQUFXO1FBSlgsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFPO0lBQ25CLENBQUM7SUFFTCxpQ0FBSyxHQUFMLFVBQU0sS0FBd0IsRUFBRSxNQUFlO1FBQzdDLGlHQUFpRztRQUVqRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxFQUFXO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRTFELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDckMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLElBQW9CO1lBQ2xELElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN6QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUM1QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQXBDVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7WUFDeEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBS3lCLDBCQUFXO1lBQ1YsNEJBQVk7WUFDbkIsdUJBQWM7WUFDSCx5QkFBZ0I7WUFDM0IsV0FBSTtPQVJaLGlCQUFpQixDQXNDN0I7SUFBRCx3QkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gJy4vaXRlbS5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlcy9nZXN0dXJlcyc7XG5pbXBvcnQgeyBTb3VuZFNlcnZpY2UgfSBmcm9tICcuL3NvdW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UsIE5hdmlnYXRlZERhdGF9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtc3ViLWl0ZW1zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Yi1pdGVtcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1Yi1pdGVtcy5jb21wb25lbnQuY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgU3ViSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpdGVtczogSXRlbVtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICBwcml2YXRlIHNvdW5kU2VydmljZTogU291bmRTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIFxuICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgcHJpdmF0ZSBwYWdlIDogUGFnZVxuICApIHsgfVxuXG4gIG9uVGFwKGV2ZW50IDogR2VzdHVyZUV2ZW50RGF0YSwgaXRlbUlkIDogbnVtYmVyKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIkV2ZW50OiBcIiArIGV2ZW50LmV2ZW50TmFtZSArIFwiLCBzZW5kZXI6IFwiICsgZXZlbnQub2JqZWN0KyBcIiwgaXRlbSBpZDogXCIgKyBpdGVtSWQpO1xuXG4gICAgdGhpcy5zb3VuZFNlcnZpY2UuZ2V0U291bmQoaXRlbUlkKS5zb3VuZC5wbGF5KCk7ICAgICAgXG4gIH1cblxuICBvbkxvYWQoaWQgOiBzdHJpbmcpIHtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtKHBhcnNlSW50KGlkKSkuaXRlbXM7XG5cbiAgICBpZiAodGhpcy5pdGVtcyA9PSBudWxsIHx8IHRoaXMuaXRlbXMubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHsgICAgXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHJvdXRlUGFyYW1zID0+IHtcbiAgICAgIHRoaXMub25Mb2FkKHJvdXRlUGFyYW1zLmlkKTtcbiAgICB9KTtcblxuICAgIHRoaXMucGFnZS5vbihcIm5hdmlnYXRpbmdGcm9tXCIsIChhcmdzIDogTmF2aWdhdGVkRGF0YSkgPT4ge1xuICAgICAgaWYgKGFyZ3MuaXNCYWNrTmF2aWdhdGlvbikge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgICBcbiAgfVxuXG59XG4iXX0=