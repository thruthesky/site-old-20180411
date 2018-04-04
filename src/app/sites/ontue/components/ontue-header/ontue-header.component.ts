import { Component } from '@angular/core';
import { ShareService } from '../../../../providers/share.service';
import { FireService } from '../../../../modules/firelibrary/core';

@Component({
    selector: 'ontue-header',
    templateUrl: 'ontue-header.component.html',
    styleUrls: ['ontue-header.component.scss'],
})
export class OntueHeaderComponent {
    constructor(
        public share: ShareService,
        public fire: FireService
    ) {

    }
}
