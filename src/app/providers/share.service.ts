import { Injectable } from '@angular/core';



@Injectable()
export class ShareService {
    color: string = null;
    constructor() {
        console.log(`ShareService::constructor()`);
        this.setColor('white');
    }
    setColor( color ) {
        this.color = color;
        console.log(`Color has been set to ${this.color}`);
    }
    getDomain() {
        return window.location.hostname;
    }

    isKatalkenglishTheme() {
        return this.getDomain().indexOf('katalkenglish') !== -1;
    }
}
