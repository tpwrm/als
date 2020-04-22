"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var image_source_1 = require("tns-core-modules/image-source");
var file_system_1 = require("tns-core-modules/file-system/file-system");
var ItemService = /** @class */ (function () {
    function ItemService() {
        this.items = new Array();
    }
    ItemService.prototype.init = function () {
        this.readDefaultJsonSync();
    };
    ItemService.prototype.readDefaultJsonSync = function () {
        var _this = this;
        var mediaDir = file_system_1.knownFolders.currentApp().getFolder("media");
        var jsonFile = mediaDir.getFile('default-categories.json');
        console.log("mediaDir " + mediaDir.path);
        console.log("jsonFile exists " + file_system_1.File.exists(jsonFile.path));
        mediaDir.getEntities()
            .then(function (entities) {
            entities.forEach(function (entity) {
                console.log("file in mediDir " + entity.path);
            });
        }).catch(function (err) {
            console.log(err.stack);
        });
        if (mediaDir.contains('default-categories.json')) {
            console.log("reading default-categories.json file......");
            var jsonFileText = jsonFile.readTextSync();
            console.log("default-categories.json file readed!");
            console.log("parsing default-categories.json file......");
            var jsonData = JSON.parse(jsonFileText);
            console.log("File default-categories.json parsed!");
            jsonData.forEach(function (element) {
                if (element.disabled == false) {
                    _this.items.push(element);
                }
            });
        }
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
        return this.getItemInternal(id, this.items);
        //return this.items.filter(item => item.id === id)[0];
    };
    ItemService.prototype.getItemInternal = function (id, items) {
        var _this = this;
        var result = null;
        items.forEach(function (item) {
            if (result == null) {
                if (item.id === id) {
                    result = item;
                }
                else if (item.items != null) {
                    result = _this.getItemInternal(id, item.items);
                }
            }
        });
        return result;
    };
    ItemService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDhEQUE4RjtBQUM5Rix3RUFBcUY7QUFPckY7SUFIQTtRQUtJLFVBQUssR0FBYSxJQUFJLEtBQUssRUFBUSxDQUFDO0lBb0Z4QyxDQUFDO0lBbEZHLDBCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQseUNBQW1CLEdBQW5CO1FBQUEsaUJBK0JDO1FBOUJHLElBQUksUUFBUSxHQUFxQiwwQkFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RSxJQUFJLFFBQVEsR0FBVSxRQUFRLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFFbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsa0JBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFN0QsUUFBUSxDQUFDLFdBQVcsRUFBRTthQUNyQixJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ1gsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07Z0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFD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QUssQ0FBQyxDQUFDO2lCQUNqRDthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBckZRLFdBQVc7UUFIdkIsaUJBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVyxXQUFXLENBc0Z2QjtJQUFELGtCQUFDO0NBQUEsQUF0RkQsSUFzRkM7QUF0Rlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW0ubW9kZWxcIjtcbmltcG9ydCB7SW1hZ2VTb3VyY2UsIGZyb21GaWxlLCBmcm9tUmVzb3VyY2UsIGZyb21CYXNlNjR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xuaW1wb3J0IHsga25vd25Gb2xkZXJzLCBGb2xkZXIsIEZpbGV9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXksIENoYW5nZWREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXlcIjtcblxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2UgeyAgXG5cbiAgICBpdGVtcyA6IEl0ZW0gW10gPSBuZXcgQXJyYXk8SXRlbT4oKTtcblxuICAgIGluaXQgKCkge1xuICAgICAgICB0aGlzLnJlYWREZWZhdWx0SnNvblN5bmMoKTtcbiAgICB9XG5cbiAgICByZWFkRGVmYXVsdEpzb25TeW5jKCkge1xuICAgICAgICBsZXQgbWVkaWFEaXIgOiBGb2xkZXIgPSA8Rm9sZGVyPiBrbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLmdldEZvbGRlcihcIm1lZGlhXCIpO1xuICAgICAgICBsZXQganNvbkZpbGUgOiBGaWxlID0gbWVkaWFEaXIuZ2V0RmlsZSgnZGVmYXVsdC1jYXRlZ29yaWVzLmpzb24nKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIm1lZGlhRGlyIFwiICsgbWVkaWFEaXIucGF0aCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwianNvbkZpbGUgZXhpc3RzIFwiICsgRmlsZS5leGlzdHMoanNvbkZpbGUucGF0aCkpO1xuXG4gICAgICAgIG1lZGlhRGlyLmdldEVudGl0aWVzKClcbiAgICAgICAgLnRoZW4oKGVudGl0aWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbGUgaW4gbWVkaURpciBcIiArIGVudGl0eS5wYXRoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWVkaWFEaXIuY29udGFpbnMoJ2RlZmF1bHQtY2F0ZWdvcmllcy5qc29uJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVhZGluZyBkZWZhdWx0LWNhdGVnb3JpZXMuanNvbiBmaWxlLi4uLi4uXCIpO1xuICAgICAgICAgICAgbGV0IGpzb25GaWxlVGV4dCA9IGpzb25GaWxlLnJlYWRUZXh0U3luYygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWZhdWx0LWNhdGVnb3JpZXMuanNvbiBmaWxlIHJlYWRlZCFcIik7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFyc2luZyBkZWZhdWx0LWNhdGVnb3JpZXMuanNvbiBmaWxlLi4uLi4uXCIpO1xuICAgICAgICAgICAgbGV0IGpzb25EYXRhOiBJdGVtW10gPSBKU09OLnBhcnNlKGpzb25GaWxlVGV4dCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGUgZGVmYXVsdC1jYXRlZ29yaWVzLmpzb24gcGFyc2VkIVwiKTtcblxuICAgICAgICAgICAganNvbkRhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5kaXNhYmxlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBbGxJdGVtcygpOiBJdGVtW10ge1xuICAgICAgICBmb3IgKGxldCBfaSA9IDA7IF9pIDwgdGhpcy5pdGVtcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW19pXS5pbWcgPSA8SW1hZ2VTb3VyY2U+IGZyb21GaWxlKHRoaXMuaXRlbXNbX2ldLmltZ1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXRlbXNbX2ldLmltZ1BhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0SXRlbXNCeUNhdGVnb3J5KGNhdGVnb3J5OnN0cmluZyk6SXRlbVtdIHtcbiAgICAgICAgbGV0IHJldHVybkl0ZW1zID0gbmV3IEFycmF5PEl0ZW0+KCk7XG5cbiAgICAgICAgZm9yIChsZXQgX2kgPSAwOyBfaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2F0ZWdvcnkgPT0gdGhpcy5pdGVtc1tfaV0uY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmV0dXJtSXRlbTpJdGVtID0gdGhpcy5pdGVtc1tfaV07IFxuICAgICAgICAgICAgICAgIHJldHVybUl0ZW0uaW1nID0gPEltYWdlU291cmNlPiBmcm9tRmlsZSh0aGlzLml0ZW1zW19pXS5pbWdQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeSArIFwiW1wiICsgcmV0dXJtSXRlbS5pbWdQYXRoICsgXCJdIFtcIiArIHJldHVybUl0ZW0udmlkZW9QYXRoICsgXCJdXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybkl0ZW1zLnB1c2gocmV0dXJtSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuSXRlbXM7XG4gICAgfVxuXG4gICAgZ2V0SXRlbShpZDogbnVtYmVyKTogSXRlbSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1JbnRlcm5hbChpZCwgdGhpcy5pdGVtcyk7XG5cbiAgICAgICAgLy9yZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRJdGVtSW50ZXJuYWwoaWQ6IG51bWJlciwgaXRlbXMgOiBJdGVtW10pOiBJdGVtIHtcbiAgICAgICAgbGV0IHJlc3VsdCA6IEl0ZW0gPSBudWxsO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uaXRlbXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmdldEl0ZW1JbnRlcm5hbChpZCwgaXRlbS5pdGVtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiJdfQ==