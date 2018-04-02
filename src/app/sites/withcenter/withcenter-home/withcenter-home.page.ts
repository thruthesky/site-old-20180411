import { Component } from '@angular/core';
import { ShareService } from '../../../providers/share.service';
import { FireService } from '../../../modules/firelibrary/core';


@Component({
  selector: 'app-page-withcenter-home',
  templateUrl: 'withcenter-home.page.html',
  styleUrls: ['withcenter-home.page.scss'],
})
export class WithcenterHomePage {
  constructor(
    public share: ShareService,
    public fire: FireService
  ) {

  }
}


