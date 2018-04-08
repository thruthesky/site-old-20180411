import { Component } from '@angular/core';
import { ShareService } from '../../../providers/share.service';
import { FireService } from '../../../modules/firelibrary/core';


@Component({
  selector: 'app-page-katalkenglish-home',
  templateUrl: 'katalkenglish-home.page.html',
  styleUrls: ['katalkenglish-home.page.scss'],
})
export class KatalkEnglishHomePage {
  constructor(
    public share: ShareService,
    public fire: FireService
  ) {

    share.language.resetUserLanguage('en');
  }
}

