import { Component } from '@angular/core';
import { AppService } from '../../../../providers/app.service';

@Component({
  selector: 'app-page-katalkenglish-help',
  templateUrl: 'katalkenglish-help.page.html',
  styleUrls: ['katalkenglish-help.page.scss'],
})
export class KatalkEnglishHelpPage {
  constructor(
    public share: AppService
  ) {
    // console.log(`HelpPage:constructor()`);
    // console.log(`current: ${share.color}, change: blue`);
    // share.setColor('blue');
  }
}




