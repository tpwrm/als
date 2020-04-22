"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var soundPlugIn = require("nativescript-sound");
var SoundService = /** @class */ (function () {
    function SoundService() {
        this.sounds = new Array();
    }
    SoundService.prototype.init = function (items) {
        return this.initInternal(items);
    };
    SoundService.prototype.initInternal = function (items) {
        var _this = this;
        items.forEach(function (element) {
            var sound = { id: element.id, sound: soundPlugIn.create(element.audioPath) };
            _this.sounds.push(sound);
            if (element.items != null) {
                _this.initInternal(element.items);
            }
        });
    };
    SoundService.prototype.getSound = function (id) {
        var result = null;
        this.sounds.forEach(function (element) {
            if (element.id == id) {
                result = element;
            }
        });
        return result;
    };
    SoundService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], SoundService);
    return SoundService;
}());
exports.SoundService = SoundService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291bmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNvdW5kLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFLM0MsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFLaEQ7SUFIQTtRQUlJLFdBQU0sR0FBWSxJQUFJLEtBQUssRUFBUyxDQUFDO0lBNkJ6QyxDQUFDO0lBM0JHLDJCQUFJLEdBQUosVUFBSyxLQUFjO1FBQ2YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxtQ0FBWSxHQUFwQixVQUFxQixLQUFjO1FBQW5DLGlCQVVDO1FBVEcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDakIsSUFBTSxLQUFLLEdBQUcsRUFBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQztZQUU3RSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV4QixJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO2dCQUN2QixLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFRLEdBQVIsVUFBUyxFQUFXO1FBQ2hCLElBQUksTUFBTSxHQUFXLElBQUksQ0FBQztRQUUxQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdkIsSUFBSSxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTtnQkFDbEIsTUFBTSxHQUFHLE9BQU8sQ0FBQzthQUNwQjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQTdCUSxZQUFZO1FBSHhCLGlCQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO09BQ1csWUFBWSxDQThCeEI7SUFBRCxtQkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtLm1vZGVsXCI7XG5pbXBvcnQgeyBTb3VuZCB9IGZyb20gXCIuL3NvdW5kLm1vZGVsXCI7XG5cbnZhciBzb3VuZFBsdWdJbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc291bmRcIik7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxufSlcbmV4cG9ydCBjbGFzcyBTb3VuZFNlcnZpY2Uge1xuICAgIHNvdW5kczogU291bmRbXSA9IG5ldyBBcnJheTxTb3VuZD4oKTtcblxuICAgIGluaXQoaXRlbXMgOiBJdGVtW10pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5pdEludGVybmFsKGl0ZW1zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRJbnRlcm5hbChpdGVtcyA6IEl0ZW1bXSkge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc291bmQgPSB7aWQ6IGVsZW1lbnQuaWQsIHNvdW5kOiBzb3VuZFBsdWdJbi5jcmVhdGUoZWxlbWVudC5hdWRpb1BhdGgpfTtcblxuICAgICAgICAgICAgdGhpcy5zb3VuZHMucHVzaChzb3VuZCk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lml0ZW1zICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRJbnRlcm5hbChlbGVtZW50Lml0ZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0U291bmQoaWQgOiBudW1iZXIpIDogU291bmQge1xuICAgICAgICBsZXQgcmVzdWx0IDogU291bmQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuc291bmRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSJdfQ==