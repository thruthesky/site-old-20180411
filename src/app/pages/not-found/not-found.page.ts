
import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../providers/share.service';


@Component({
    selector: 'not-found-page',
    templateUrl: 'not-found.page.html',
    styleUrls: ['not-found.page.scss'],
})
export class NotFoundPage implements OnInit {


    constructor(
        public share: ShareService
    ) {
        console.log(`NotFoundPage::constructor()`);

    }

    ngOnInit() {

    }

}
