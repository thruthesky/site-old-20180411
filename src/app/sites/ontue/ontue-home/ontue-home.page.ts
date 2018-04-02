import { Component } from '@angular/core';
import { ShareService } from '../../../providers/share.service';
import { FireService } from '../../../modules/firelibrary/core';


@Component({
  selector: 'app-page-ontue-home',
  templateUrl: 'ontue-home.page.html',
  styleUrls: ['ontue-home.page.scss'],
})
export class OntueHomePage {
  constructor(
    public share: ShareService,
    public fire: FireService
  ) {

  }
}


