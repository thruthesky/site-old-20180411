import { Component } from '@angular/core';
import { FireService } from '../../modules/firelibrary/core';
import { AppService } from '../../providers/app.service';


@Component({
    selector: 'forum-page',
    templateUrl: './forum.page.html',
    styleUrls: ['./forum.page.scss']
})
export class ForumPage {
    constructor(
        public a: AppService,
        public fire: FireService
    ) {

    }
}


