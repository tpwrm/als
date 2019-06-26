"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_source_1 = require("tns-core-modules/image-source");
var file_system_1 = require("tns-core-modules/file-system/file-system");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var ItemService = /** @class */ (function () {
    function ItemService() {
        /*
        private items = new Array<Item>(
            { id: 1, category: "fruits", name: "Mela", imgType: "png", imgPath: "~/media/images/fruits/mela.png", img: null, videoPath: "~/media/videos/mela.mp4" },
            { id: 2, category: "fruits", name: "Banana", imgType: "png", imgPath: "~/media/images/fruits/banana.png", img: null, videoPath: "~/media/videos/mela.mp4" },
            { id: 3, category: "fruits", name: "Pera", imgType: "png", imgPath: "~/media/images/fruits/pera.png", img: null, videoPath: "~/media/videos/mela.mp4" },
            { id: 4, category: "fruits", name: "Uva", imgType: "png", imgPath: "~/media/images/fruits/uva.png", img: null, videoPath: "~/media/videos/mela.mp4" },
            { id: 5, category: "fruits", name: "Arancia", imgType: "png", imgPath: "~/media/images/fruits/arancia.png", img: null, videoPath: "~/media/videos/mela.mp4" },
            { id: 6, category: "fruits", name: "Fragola", imgType: "png", imgPath: "~/media/images/fruits/fragola.png", img: null, videoPath: "~/media/videos/mela.mp4" },
            { id: 7, category: "fruits", name: "Limone", imgType: "png", imgPath: "~/media/images/fruits/limone.png", img: null, videoPath: "~/media/videos/mela.mp4" },
            { id: 8, category: "fruits", name: "Cilieggie", imgType: "png", imgPath: "~/media/images/fruits/ciliegge.png", img: null, videoPath: "~/media/videos/mela.mp4" },
    
            { id: 9, category: "animals", name: "Mucca", imgType: "png", imgPath: "~/media/images/animals/mucca.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
            { id: 10, category: "animals", name: "Gatto", imgType: "png", imgPath: "~/media/images/animals/gatto.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
            { id: 11, category: "animals", name: "Cane", imgType: "png", imgPath: "~/media/images/animals/cane.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
            { id: 12, category: "animals", name: "Gallina", imgType: "png", imgPath: "~/media/images/animals/gallina.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
            { id: 13, category: "animals", name: "Maiale", imgType: "png", imgPath: "~/media/images/animals/maiale.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
            { id: 14, category: "animals", name: "Pecora", imgType: "png", imgPath: "~/media/images/animals/pecora.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
            { id: 15, category: "animals", name: "Cavallo", imgType: "png", imgPath: "~/media/images/animals/cavallo.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
            { id: 16, category: "animals", name: "Elefante", imgType: "png", imgPath: "~/media/images/animals/elefante.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
            { id: 18, category: "animals", name: "Leone", imgType: "png", imgPath: "~/media/images/animals/leone.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
    
            { id: 19, category: "colors", name: "Rosso", imgType: "png", imgPath: "~/media/images/colors/rosso.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
            { id: 20, category: "colors", name: "Giallo", imgType: "png", imgPath: "~/media/images/colors/giallo.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
            { id: 21, category: "colors", name: "Blu", imgType: "png", imgPath: "~/media/images/colors/blu.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
            { id: 22, category: "colors", name: "Arancio", imgType: "png", imgPath: "~/media/images/colors/arancio.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
            { id: 23, category: "colors", name: "Verde", imgType: "png", imgPath: "~/media/images/colors/verde.png", img: null, videoPath: "~/media/videos/mucca.mp4" },
        );
        */
        this.items = new Array();
    }
    /*
    init () {
        let array : ObservableArray<Item> = this.readJson();

        array.on(ObservableArray.changeEvent,(args:any) => {
            console.log(" args " + args.index + " " + array.getItem(args.index));
            //let quest: Quest = args.object; // can not cast to quest
            this.items.push(array.getItem(args.index));
        });
    }
    */
    ItemService.prototype.readJson = function () {
        var _this = this;
        var mediaDir = file_system_1.knownFolders.currentApp().getFolder("media");
        var jsonFile = mediaDir.getFile('default_categories.json');
        var jsonData;
        var array = new observable_array_1.ObservableArray();
        if (mediaDir.contains('default_categories.json')) {
            jsonFile.readText()
                .then(function (content) {
                try {
                    jsonData = JSON.parse(content);
                    array = new observable_array_1.ObservableArray(jsonData);
                    /*
                    let itemsTmp : Item [] = new Array<Item>();

                    array.forEach(element => {
                        itemsTmp.push(element);
                    });

                    this.items = itemsTmp;
                    */
                    console.log("default_categories.json file parsed");
                    array.on(observable_array_1.ObservableArray.changeEvent, function (args) {
                        console.log(" args " + args.index + " " + array.getItem(args.index));
                        //let quest: Quest = args.object; // can not cast to quest
                        _this.items.push(array.getItem(args.index));
                    });
                }
                catch (err) {
                    throw new Error("Could not parse default_categories.json file " + err);
                }
            });
        }
        console.log("return array");
        return array;
    };
    ItemService.prototype.getAllItems = function () {
        for (var _i = 0; _i < this.items.length; _i++) {
            this.items[_i].img = image_source_1.fromFile(this.items[_i].imgPath);
            console.log(this.items[_i].imgPath);
        }
        return this.items;
    };
    ItemService.prototype.getItemsByCategory = function (category) {
        var returnItems = new Array();
        for (var _i = 0; _i < this.items.length; _i++) {
            if (category == this.items[_i].category) {
                var returmItem = this.items[_i];
                returmItem.img = image_source_1.fromFile(this.items[_i].imgPath);
                console.log(category + "[" + returmItem.imgPath + "] [" + returmItem.videoPath + "]");
                returnItems.push(returmItem);
            }
        }
        return returnItems;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    ItemService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDhEQUE4RjtBQUM5Rix3RUFBcUY7QUFDckYsNEZBQXVHO0FBTXZHO0lBSEE7UUFLSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBMkJFO1FBRUYsVUFBSyxHQUFhLElBQUksS0FBSyxFQUFRLENBQUM7SUFtRnhDLENBQUM7SUFqRkc7Ozs7Ozs7Ozs7TUFVRTtJQUVGLDhCQUFRLEdBQVI7UUFBQSxpQkF3Q0M7UUF2Q0csSUFBSSxRQUFRLEdBQXFCLDBCQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlFLElBQUksUUFBUSxHQUFVLFFBQVEsQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNsRSxJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksS0FBSyxHQUEyQixJQUFJLGtDQUFlLEVBQUUsQ0FBQztRQUUxRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsRUFBRTtZQUM5QyxRQUFRLENBQUMsUUFBUSxFQUFFO2lCQUNkLElBQUksQ0FBQyxVQUFDLE9BQU87Z0JBQ1YsSUFBSTtvQkFDQSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDL0IsS0FBSyxHQUFHLElBQUksa0NBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFdEM7Ozs7Ozs7O3NCQVFFO29CQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztvQkFFbkQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDLFdBQVcsRUFBQyxVQUFDLElBQVE7d0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ3JFLDBEQUEwRDt3QkFDMUQsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDL0MsQ0FBQyxDQUFDLENBQUM7aUJBRU47Z0JBQUMsT0FBTyxHQUFHLEVBQUU7b0JBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQywrQ0FBK0MsR0FBRyxHQUFHLENBQUMsQ0FBQztpQkFDMUU7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNWO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU1QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUNJLEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBaUIsdUJBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsd0NBQWtCLEdBQWxCLFVBQW1CLFFBQWU7UUFDOUIsSUFBSSxXQUFXLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztRQUVwQyxLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDM0MsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JDLElBQUksVUFBVSxHQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3JDLFVBQVUsQ0FBQyxHQUFHLEdBQWlCLHVCQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ3RGLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDaEM7U0FDSjtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBakhRLFdBQVc7UUFIdkIsaUJBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVyxXQUFXLENBa0h2QjtJQUFELGtCQUFDO0NBQUEsQUFsSEQsSUFrSEM7QUFsSFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7SW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xuaW1wb3J0IHsga25vd25Gb2xkZXJzLCBGb2xkZXIsIEZpbGV9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXksIENoYW5nZWREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXlcIjtcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xuICAgIFxuICAgIC8qXG4gICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxJdGVtPihcbiAgICAgICAgeyBpZDogMSwgY2F0ZWdvcnk6IFwiZnJ1aXRzXCIsIG5hbWU6IFwiTWVsYVwiLCBpbWdUeXBlOiBcInBuZ1wiLCBpbWdQYXRoOiBcIn4vbWVkaWEvaW1hZ2VzL2ZydWl0cy9tZWxhLnBuZ1wiLCBpbWc6IG51bGwsIHZpZGVvUGF0aDogXCJ+L21lZGlhL3ZpZGVvcy9tZWxhLm1wNFwiIH0sXG4gICAgICAgIHsgaWQ6IDIsIGNhdGVnb3J5OiBcImZydWl0c1wiLCBuYW1lOiBcIkJhbmFuYVwiLCBpbWdUeXBlOiBcInBuZ1wiLCBpbWdQYXRoOiBcIn4vbWVkaWEvaW1hZ2VzL2ZydWl0cy9iYW5hbmEucG5nXCIsIGltZzogbnVsbCwgdmlkZW9QYXRoOiBcIn4vbWVkaWEvdmlkZW9zL21lbGEubXA0XCIgfSxcbiAgICAgICAgeyBpZDogMywgY2F0ZWdvcnk6IFwiZnJ1aXRzXCIsIG5hbWU6IFwiUGVyYVwiLCBpbWdUeXBlOiBcInBuZ1wiLCBpbWdQYXRoOiBcIn4vbWVkaWEvaW1hZ2VzL2ZydWl0cy9wZXJhLnBuZ1wiLCBpbWc6IG51bGwsIHZpZGVvUGF0aDogXCJ+L21lZGlhL3ZpZGVvcy9tZWxhLm1wNFwiIH0sXG4gICAgICAgIHsgaWQ6IDQsIGNhdGVnb3J5OiBcImZydWl0c1wiLCBuYW1lOiBcIlV2YVwiLCBpbWdUeXBlOiBcInBuZ1wiLCBpbWdQYXRoOiBcIn4vbWVkaWEvaW1hZ2VzL2ZydWl0cy91dmEucG5nXCIsIGltZzogbnVsbCwgdmlkZW9QYXRoOiBcIn4vbWVkaWEvdmlkZW9zL21lbGEubXA0XCIgfSxcbiAgICAgICAgeyBpZDogNSwgY2F0ZWdvcnk6IFwiZnJ1aXRzXCIsIG5hbWU6IFwiQXJhbmNpYVwiLCBpbWdUeXBlOiBcInBuZ1wiLCBpbWdQYXRoOiBcIn4vbWVkaWEvaW1hZ2VzL2ZydWl0cy9hcmFuY2lhLnBuZ1wiLCBpbWc6IG51bGwsIHZpZGVvUGF0aDogXCJ+L21lZGlhL3ZpZGVvcy9tZWxhLm1wNFwiIH0sXG4gICAgICAgIHsgaWQ6IDYsIGNhdGVnb3J5OiBcImZydWl0c1wiLCBuYW1lOiBcIkZyYWdvbGFcIiwgaW1nVHlwZTogXCJwbmdcIiwgaW1nUGF0aDogXCJ+L21lZGlhL2ltYWdlcy9mcnVpdHMvZnJhZ29sYS5wbmdcIiwgaW1nOiBudWxsLCB2aWRlb1BhdGg6IFwifi9tZWRpYS92aWRlb3MvbWVsYS5tcDRcIiB9LFxuICAgICAgICB7IGlkOiA3LCBjYXRlZ29yeTogXCJmcnVpdHNcIiwgbmFtZTogXCJMaW1vbmVcIiwgaW1nVHlwZTogXCJwbmdcIiwgaW1nUGF0aDogXCJ+L21lZGlhL2ltYWdlcy9mcnVpdHMvbGltb25lLnBuZ1wiLCBpbWc6IG51bGwsIHZpZGVvUGF0aDogXCJ+L21lZGlhL3ZpZGVvcy9tZWxhLm1wNFwiIH0sXG4gICAgICAgIHsgaWQ6IDgsIGNhdGVnb3J5OiBcImZydWl0c1wiLCBuYW1lOiBcIkNpbGllZ2dpZVwiLCBpbWdUeXBlOiBcInBuZ1wiLCBpbWdQYXRoOiBcIn4vbWVkaWEvaW1hZ2VzL2ZydWl0cy9jaWxpZWdnZS5wbmdcIiwgaW1nOiBudWxsLCB2aWRlb1BhdGg6IFwifi9tZWRpYS92aWRlb3MvbWVsYS5tcDRcIiB9LFxuXG4gICAgICAgIHsgaWQ6IDksIGNhdGVnb3J5OiBcImFuaW1hbHNcIiwgbmFtZTogXCJNdWNjYVwiLCBpbWdUeXBlOiBcInBuZ1wiLCBpbWdQYXRoOiBcIn4vbWVkaWEvaW1hZ2VzL2FuaW1hbHMvbXVjY2EucG5nXCIsIGltZzogbnVsbCwgdmlkZW9QYXRoOiBcIn4vbWVkaWEvdmlkZW9zL211Y2NhLm1wNFwiIH0sXG4gICAgICAgIHsgaWQ6IDEwLCBjYXRlZ29yeTogXCJhbmltYWxzXCIsIG5hbWU6IFwiR2F0dG9cIiwgaW1nVHlwZTogXCJwbmdcIiwgaW1nUGF0aDogXCJ+L21lZGlhL2ltYWdlcy9hbmltYWxzL2dhdHRvLnBuZ1wiLCBpbWc6IG51bGwsIHZpZGVvUGF0aDogXCJ+L21lZGlhL3ZpZGVvcy9tdWNjYS5tcDRcIiB9LFxuICAgICAgICB7IGlkOiAxMSwgY2F0ZWdvcnk6IFwiYW5pbWFsc1wiLCBuYW1lOiBcIkNhbmVcIiwgaW1nVHlwZTogXCJwbmdcIiwgaW1nUGF0aDogXCJ+L21lZGlhL2ltYWdlcy9hbmltYWxzL2NhbmUucG5nXCIsIGltZzogbnVsbCwgdmlkZW9QYXRoOiBcIn4vbWVkaWEvdmlkZW9zL211Y2NhLm1wNFwiIH0sXG4gICAgICAgIHsgaWQ6IDEyLCBjYXRlZ29yeTogXCJhbmltYWxzXCIsIG5hbWU6IFwiR2FsbGluYVwiLCBpbWdUeXBlOiBcInBuZ1wiLCBpbWdQYXRoOiBcIn4vbWVkaWEvaW1hZ2VzL2FuaW1hbHMvZ2FsbGluYS5wbmdcIiwgaW1nOiBudWxsLCB2aWRlb1BhdGg6IFwifi9tZWRpYS92aWRlb3MvbXVjY2EubXA0XCIgfSxcbiAgICAgICAgeyBpZDogMTMsIGNhdGVnb3J5OiBcImFuaW1hbHNcIiwgbmFtZTogXCJNYWlhbGVcIiwgaW1nVHlwZTogXCJwbmdcIiwgaW1nUGF0aDogXCJ+L21lZGlhL2ltYWdlcy9hbmltYWxzL21haWFsZS5wbmdcIiwgaW1nOiBudWxsLCB2aWRlb1BhdGg6IFwifi9tZWRpYS92aWRlb3MvbXVjY2EubXA0XCIgfSxcbiAgICAgICAgeyBpZDogMTQsIGNhdGVnb3J5OiBcImFuaW1hbHNcIiwgbmFtZTogXCJQZWNvcmFcIiwgaW1nVHlwZTogXCJwbmdcIiwgaW1nUGF0aDogXCJ+L21lZGlhL2ltYWdlcy9hbmltYWxzL3BlY29yYS5wbmdcIiwgaW1nOiBudWxsLCB2aWRlb1BhdGg6IFwifi9tZWRpYS92aWRlb3MvbXVjY2EubXA0XCIgfSxcbiAgICAgICAgeyBpZDogMTUsIGNhdGVnb3J5OiBcImFuaW1hbHNcIiwgbmFtZTogXCJDYXZhbGxvXCIsIGltZ1R5cGU6IFwicG5nXCIsIGltZ1BhdGg6IFwifi9tZWRpYS9pbWFnZXMvYW5pbWFscy9jYXZhbGxvLnBuZ1wiLCBpbWc6IG51bGwsIHZpZGVvUGF0aDogXCJ+L21lZGlhL3ZpZGVvcy9tdWNjYS5tcDRcIiB9LFxuICAgICAgICB7IGlkOiAxNiwgY2F0ZWdvcnk6IFwiYW5pbWFsc1wiLCBuYW1lOiBcIkVsZWZhbnRlXCIsIGltZ1R5cGU6IFwicG5nXCIsIGltZ1BhdGg6IFwifi9tZWRpYS9pbWFnZXMvYW5pbWFscy9lbGVmYW50ZS5wbmdcIiwgaW1nOiBudWxsLCB2aWRlb1BhdGg6IFwifi9tZWRpYS92aWRlb3MvbXVjY2EubXA0XCIgfSxcbiAgICAgICAgeyBpZDogMTgsIGNhdGVnb3J5OiBcImFuaW1hbHNcIiwgbmFtZTogXCJMZW9uZVwiLCBpbWdUeXBlOiBcInBuZ1wiLCBpbWdQYXRoOiBcIn4vbWVkaWEvaW1hZ2VzL2FuaW1hbHMvbGVvbmUucG5nXCIsIGltZzogbnVsbCwgdmlkZW9QYXRoOiBcIn4vbWVkaWEvdmlkZW9zL211Y2NhLm1wNFwiIH0sXG5cbiAgICAgICAgeyBpZDogMTksIGNhdGVnb3J5OiBcImNvbG9yc1wiLCBuYW1lOiBcIlJvc3NvXCIsIGltZ1R5cGU6IFwicG5nXCIsIGltZ1BhdGg6IFwifi9tZWRpYS9pbWFnZXMvY29sb3JzL3Jvc3NvLnBuZ1wiLCBpbWc6IG51bGwsIHZpZGVvUGF0aDogXCJ+L21lZGlhL3ZpZGVvcy9tdWNjYS5tcDRcIiB9LFxuICAgICAgICB7IGlkOiAyMCwgY2F0ZWdvcnk6IFwiY29sb3JzXCIsIG5hbWU6IFwiR2lhbGxvXCIsIGltZ1R5cGU6IFwicG5nXCIsIGltZ1BhdGg6IFwifi9tZWRpYS9pbWFnZXMvY29sb3JzL2dpYWxsby5wbmdcIiwgaW1nOiBudWxsLCB2aWRlb1BhdGg6IFwifi9tZWRpYS92aWRlb3MvbXVjY2EubXA0XCIgfSxcbiAgICAgICAgeyBpZDogMjEsIGNhdGVnb3J5OiBcImNvbG9yc1wiLCBuYW1lOiBcIkJsdVwiLCBpbWdUeXBlOiBcInBuZ1wiLCBpbWdQYXRoOiBcIn4vbWVkaWEvaW1hZ2VzL2NvbG9ycy9ibHUucG5nXCIsIGltZzogbnVsbCwgdmlkZW9QYXRoOiBcIn4vbWVkaWEvdmlkZW9zL211Y2NhLm1wNFwiIH0sXG4gICAgICAgIHsgaWQ6IDIyLCBjYXRlZ29yeTogXCJjb2xvcnNcIiwgbmFtZTogXCJBcmFuY2lvXCIsIGltZ1R5cGU6IFwicG5nXCIsIGltZ1BhdGg6IFwifi9tZWRpYS9pbWFnZXMvY29sb3JzL2FyYW5jaW8ucG5nXCIsIGltZzogbnVsbCwgdmlkZW9QYXRoOiBcIn4vbWVkaWEvdmlkZW9zL211Y2NhLm1wNFwiIH0sXG4gICAgICAgIHsgaWQ6IDIzLCBjYXRlZ29yeTogXCJjb2xvcnNcIiwgbmFtZTogXCJWZXJkZVwiLCBpbWdUeXBlOiBcInBuZ1wiLCBpbWdQYXRoOiBcIn4vbWVkaWEvaW1hZ2VzL2NvbG9ycy92ZXJkZS5wbmdcIiwgaW1nOiBudWxsLCB2aWRlb1BhdGg6IFwifi9tZWRpYS92aWRlb3MvbXVjY2EubXA0XCIgfSxcbiAgICApO1xuICAgICovXG5cbiAgICBpdGVtcyA6IEl0ZW0gW10gPSBuZXcgQXJyYXk8SXRlbT4oKTtcblxuICAgIC8qXG4gICAgaW5pdCAoKSB7XG4gICAgICAgIGxldCBhcnJheSA6IE9ic2VydmFibGVBcnJheTxJdGVtPiA9IHRoaXMucmVhZEpzb24oKTtcblxuICAgICAgICBhcnJheS5vbihPYnNlcnZhYmxlQXJyYXkuY2hhbmdlRXZlbnQsKGFyZ3M6YW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiBhcmdzIFwiICsgYXJncy5pbmRleCArIFwiIFwiICsgYXJyYXkuZ2V0SXRlbShhcmdzLmluZGV4KSk7XG4gICAgICAgICAgICAvL2xldCBxdWVzdDogUXVlc3QgPSBhcmdzLm9iamVjdDsgLy8gY2FuIG5vdCBjYXN0IHRvIHF1ZXN0XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goYXJyYXkuZ2V0SXRlbShhcmdzLmluZGV4KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAqL1xuXG4gICAgcmVhZEpzb24oKSA6IE9ic2VydmFibGVBcnJheTxJdGVtPiB7XG4gICAgICAgIGxldCBtZWRpYURpciA6IEZvbGRlciA9IDxGb2xkZXI+IGtub3duRm9sZGVycy5jdXJyZW50QXBwKCkuZ2V0Rm9sZGVyKFwibWVkaWFcIik7XG4gICAgICAgIGxldCBqc29uRmlsZSA6IEZpbGUgPSBtZWRpYURpci5nZXRGaWxlKCdkZWZhdWx0X2NhdGVnb3JpZXMuanNvbicpO1xuICAgICAgICBsZXQganNvbkRhdGE7XG4gICAgICAgIGxldCBhcnJheSA6IE9ic2VydmFibGVBcnJheTxJdGVtPiA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcblxuICAgICAgICBpZiAobWVkaWFEaXIuY29udGFpbnMoJ2RlZmF1bHRfY2F0ZWdvcmllcy5qc29uJykpIHtcbiAgICAgICAgICAgIGpzb25GaWxlLnJlYWRUZXh0KClcbiAgICAgICAgICAgICAgICAudGhlbigoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAganNvbkRhdGEgPSBKU09OLnBhcnNlKGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KGpzb25EYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtc1RtcCA6IEl0ZW0gW10gPSBuZXcgQXJyYXk8SXRlbT4oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1RtcC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtc1RtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVmYXVsdF9jYXRlZ29yaWVzLmpzb24gZmlsZSBwYXJzZWRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5Lm9uKE9ic2VydmFibGVBcnJheS5jaGFuZ2VFdmVudCwoYXJnczphbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiBhcmdzIFwiICsgYXJncy5pbmRleCArIFwiIFwiICsgYXJyYXkuZ2V0SXRlbShhcmdzLmluZGV4KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9sZXQgcXVlc3Q6IFF1ZXN0ID0gYXJncy5vYmplY3Q7IC8vIGNhbiBub3QgY2FzdCB0byBxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChhcnJheS5nZXRJdGVtKGFyZ3MuaW5kZXgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHBhcnNlIGRlZmF1bHRfY2F0ZWdvcmllcy5qc29uIGZpbGUgXCIgKyBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybiBhcnJheVwiKTtcblxuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0QWxsSXRlbXMoKTogSXRlbVtdIHtcbiAgICAgICAgZm9yIChsZXQgX2kgPSAwOyBfaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW19pXS5pbWcgPSA8SW1hZ2VTb3VyY2U+IGZyb21GaWxlKHRoaXMuaXRlbXNbX2ldLmltZ1BhdGgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pdGVtc1tfaV0uaW1nUGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICBnZXRJdGVtc0J5Q2F0ZWdvcnkoY2F0ZWdvcnk6c3RyaW5nKTpJdGVtW10ge1xuICAgICAgICBsZXQgcmV0dXJuSXRlbXMgPSBuZXcgQXJyYXk8SXRlbT4oKTtcblxuICAgICAgICBmb3IgKGxldCBfaSA9IDA7IF9pIDwgdGhpcy5pdGVtcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGlmIChjYXRlZ29yeSA9PSB0aGlzLml0ZW1zW19pXS5jYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIGxldCByZXR1cm1JdGVtOkl0ZW0gPSB0aGlzLml0ZW1zW19pXTsgXG4gICAgICAgICAgICAgICAgcmV0dXJtSXRlbS5pbWcgPSA8SW1hZ2VTb3VyY2U+IGZyb21GaWxlKHRoaXMuaXRlbXNbX2ldLmltZ1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5ICsgXCJbXCIgKyByZXR1cm1JdGVtLmltZ1BhdGggKyBcIl0gW1wiICsgcmV0dXJtSXRlbS52aWRlb1BhdGggKyBcIl1cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuSXRlbXMucHVzaChyZXR1cm1JdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5JdGVtcztcbiAgICB9XG5cbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBJdGVtIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xuICAgIH1cbn1cbiJdfQ==