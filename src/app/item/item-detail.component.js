"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var item_service_1 = require("./item.service");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_videoplayer_1 = require("nativescript-videoplayer");
element_registry_1.registerElement("VideoPlayer", function () { return nativescript_videoplayer_1.Video; });
var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(itemService, route, location) {
        this.itemService = itemService;
        this.route = route;
        this.location = location;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params["id"];
        this.item = this.itemService.getItem(id);
        /*
        const documents : Folder = <Folder> knownFolders.documents();
        const folderApp : Folder = <Folder> knownFolders.currentApp();
        const parentFolderApp : Folder = <Folder> folderApp.parent;

        const folderAppChildPath = path.join(folderApp.path, "app");

        var folderAppChild : Folder = null;

        console.log("App path " + folderApp.path);
        console.log("Documents path " + documents.path);
        
        if (File.exists(folderAppChildPath)) {
            console.log("Exist " + folderAppChildPath);
            folderAppChild = <Folder>folderApp.getFolder("app");
            console.log("folderAppChild path " + folderAppChild.path);
        }

        folderApp.getEntities().then(
            (entities) => {
                entities.forEach(
                    (entity) => {
                        console.log("Entity " + entity.name);
                    }
                )
            }
            ).catch ((err) => {
                console.error(err.stack);
            }
        )
        */
    };
    ItemDetailComponent.prototype.videoFinished = function (event) {
        this.location.back();
    };
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            moduleId: module.id,
            templateUrl: "./item-detail.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCwwQ0FBMkM7QUFHM0MsK0NBQTZDO0FBSzdDLDBFQUF3RTtBQUN4RSxxRUFBaUQ7QUFDakQsa0NBQWUsQ0FBQyxhQUFhLEVBQUUsY0FBTSxPQUFBLGdDQUFLLEVBQUwsQ0FBSyxDQUFDLENBQUM7QUFPNUM7SUFHSSw2QkFDWSxXQUF3QixFQUN4QixLQUFxQixFQUNyQixRQUFrQjtRQUZsQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzFCLENBQUM7SUFFTCxzQ0FBUSxHQUFSO1FBQ0ksSUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBOEJFO0lBQ04sQ0FBQztJQUVELDJDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBaERPLG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQzt5Q0FLMkIsMEJBQVc7WUFDakIsdUJBQWM7WUFDWCxpQkFBUTtPQU5yQixtQkFBbUIsQ0FpRC9CO0lBQUQsMEJBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IEZvbGRlciwgcGF0aCwgRmlsZSB9IGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuaW1wb3J0IHsga25vd25Gb2xkZXJzIH0gZnJvbSBcImZpbGUtc3lzdGVtXCI7XG5cbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBWaWRlbyB9IGZyb20gJ25hdGl2ZXNjcmlwdC12aWRlb3BsYXllcic7XG5yZWdpc3RlckVsZW1lbnQoXCJWaWRlb1BsYXllclwiLCAoKSA9PiBWaWRlbyk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWRldGFpbHNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbTogSXRlbTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICB0aGlzLml0ZW0gPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW0oaWQpO1xuXG4gICAgICAgIC8qXG4gICAgICAgIGNvbnN0IGRvY3VtZW50cyA6IEZvbGRlciA9IDxGb2xkZXI+IGtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAgICAgY29uc3QgZm9sZGVyQXBwIDogRm9sZGVyID0gPEZvbGRlcj4ga25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcbiAgICAgICAgY29uc3QgcGFyZW50Rm9sZGVyQXBwIDogRm9sZGVyID0gPEZvbGRlcj4gZm9sZGVyQXBwLnBhcmVudDtcblxuICAgICAgICBjb25zdCBmb2xkZXJBcHBDaGlsZFBhdGggPSBwYXRoLmpvaW4oZm9sZGVyQXBwLnBhdGgsIFwiYXBwXCIpO1xuXG4gICAgICAgIHZhciBmb2xkZXJBcHBDaGlsZCA6IEZvbGRlciA9IG51bGw7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJBcHAgcGF0aCBcIiArIGZvbGRlckFwcC5wYXRoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudHMgcGF0aCBcIiArIGRvY3VtZW50cy5wYXRoKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChGaWxlLmV4aXN0cyhmb2xkZXJBcHBDaGlsZFBhdGgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV4aXN0IFwiICsgZm9sZGVyQXBwQ2hpbGRQYXRoKTtcbiAgICAgICAgICAgIGZvbGRlckFwcENoaWxkID0gPEZvbGRlcj5mb2xkZXJBcHAuZ2V0Rm9sZGVyKFwiYXBwXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmb2xkZXJBcHBDaGlsZCBwYXRoIFwiICsgZm9sZGVyQXBwQ2hpbGQucGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb2xkZXJBcHAuZ2V0RW50aXRpZXMoKS50aGVuKFxuICAgICAgICAgICAgKGVudGl0aWVzKSA9PiB7XG4gICAgICAgICAgICAgICAgZW50aXRpZXMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgKGVudGl0eSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbnRpdHkgXCIgKyBlbnRpdHkubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApLmNhdGNoICgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIuc3RhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgICovXG4gICAgfVxuXG4gICAgdmlkZW9GaW5pc2hlZChldmVudCkgeyBcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgIH0gXG59XG4iXX0=