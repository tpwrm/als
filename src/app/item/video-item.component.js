"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var item_service_1 = require("./item.service");
var router_2 = require("nativescript-angular/router");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_videoplayer_1 = require("nativescript-videoplayer");
element_registry_1.registerElement("VideoPlayer", function () { return nativescript_videoplayer_1.Video; });
var VideoItemComponent = /** @class */ (function () {
    function VideoItemComponent(itemService, route, routerExtensions) {
        this.itemService = itemService;
        this.route = route;
        this.routerExtensions = routerExtensions;
    }
    VideoItemComponent.prototype.ngOnInit = function () {
        //const id = +this.route.snapshot.params["id"];
        //this.item = this.itemService.getItem(id);
        var _this = this;
        this.route.params.subscribe(function (routeParams) {
            _this.item = _this.itemService.getItem(parseInt(routeParams.id));
        });
    };
    VideoItemComponent.prototype.videoFinished = function (event) {
        this.routerExtensions.backToPreviousPage();
    };
    VideoItemComponent = __decorate([
        core_1.Component({
            selector: 'ns-video-item',
            templateUrl: './video-item.component.html',
            styleUrls: ['./video-item.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            router_1.ActivatedRoute,
            router_2.RouterExtensions])
    ], VideoItemComponent);
    return VideoItemComponent;
}());
exports.VideoItemComponent = VideoItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8taXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWRlby1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFJakQsK0NBQTZDO0FBQzdDLHNEQUErRDtBQUMvRCwwRUFBd0U7QUFDeEUscUVBQWlEO0FBQ2pELGtDQUFlLENBQUMsYUFBYSxFQUFFLGNBQU0sT0FBQSxnQ0FBSyxFQUFMLENBQUssQ0FBQyxDQUFDO0FBUTVDO0lBR0UsNEJBQ1ksV0FBd0IsRUFDeEIsS0FBcUIsRUFDckIsZ0JBQWtDO1FBRmxDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDMUMsQ0FBQztJQUVMLHFDQUFRLEdBQVI7UUFDSSwrQ0FBK0M7UUFDL0MsMkNBQTJDO1FBRi9DLGlCQU9DO1FBSEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsV0FBVztZQUNyQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwwQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNqQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBcEJTLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN6QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FLeUIsMEJBQVc7WUFDakIsdUJBQWM7WUFDSCx5QkFBZ0I7T0FObkMsa0JBQWtCLENBc0I5QjtJQUFELHlCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtLm1vZGVsXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBWaWRlbyB9IGZyb20gJ25hdGl2ZXNjcmlwdC12aWRlb3BsYXllcic7XG5yZWdpc3RlckVsZW1lbnQoXCJWaWRlb1BsYXllclwiLCAoKSA9PiBWaWRlbyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXZpZGVvLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vdmlkZW8taXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ZpZGVvLWl0ZW0uY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBWaWRlb0l0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpdGVtOiBJdGVtO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgLy9jb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgLy90aGlzLml0ZW0gPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW0oaWQpO1xuXG4gICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocm91dGVQYXJhbXMgPT4ge1xuICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW0ocGFyc2VJbnQocm91dGVQYXJhbXMuaWQpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgdmlkZW9GaW5pc2hlZChldmVudCkgeyBcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICB9IFxuXG59XG4iXX0=