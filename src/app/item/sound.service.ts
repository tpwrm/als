import { Injectable } from "@angular/core";

import { Item } from "./item.model";
import { Sound } from "./sound.model";

var soundPlugIn = require("nativescript-sound");

@Injectable({
    providedIn: "root"
})
export class SoundService {
    sounds: Sound[] = new Array<Sound>();

    init(items : Item[]) {
        return this.initInternal(items);
    }

    private initInternal(items : Item[]) {
        items.forEach(element => {
            const sound = {id: element.id, sound: soundPlugIn.create(element.audioPath)};

            this.sounds.push(sound);

            if (element.items != null) {
                this.initInternal(element.items);
            }
        });
    }

    getSound(id : number) : Sound {
        let result : Sound = null;

        this.sounds.forEach(element => {
            if (element.id == id) {
                result = element;
            }
        });

        return result;
    }
}