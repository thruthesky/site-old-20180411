import { Component } from '@angular/core';
import { ShareService } from '../../providers/share.service';

@Component({
  selector: 'app-page-help',
  templateUrl: 'help.page.html',
  styleUrls: ['help.page.scss'],
})
export class HelpPage {
  constructor(
    public share: ShareService
  ) {
    console.log(`HelpPage:constructor()`);
    console.log(`current: ${share.color}, change: blue`);
    share.setColor('blue');
  }
}

