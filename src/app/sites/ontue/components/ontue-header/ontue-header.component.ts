import { Component } from '@angular/core';
import { AppService } from '../../../../providers/app.service';
import { FireService } from '../../../../modules/firelibrary/core';

@Component({
    selector: 'ontue-header',
    templateUrl: 'ontue-header.component.html',
    styleUrls: ['ontue-header.component.scss'],
})
export class OntueHeaderComponent {
    constructor(
        public share: AppService,
        public fire: FireService
    ) {

    }
}
