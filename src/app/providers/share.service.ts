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
}
