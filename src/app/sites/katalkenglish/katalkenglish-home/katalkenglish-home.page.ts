import { Component } from '@angular/core';
import { AppService } from '../../../providers/app.service';
import { FireService } from '../../../modules/firelibrary/core';


@Component({
  selector: 'app-page-katalkenglish-home',
  templateUrl: 'katalkenglish-home.page.html',
  styleUrls: ['katalkenglish-home.page.scss'],
})
export class KatalkEnglishHomePage {
  constructor(
    public share: AppService,
    public fire: FireService
  ) {
    console.log(`KatalkEnglisHomePage:;constructor()`);
    share.language.resetUserLanguage('en');
  }
}

