import { Component } from '@angular/core';
import { ShareService } from '../../providers/share.service';

@Component({
  selector: 'app-page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public share: ShareService
  ) {
    console.log(`HomePage:constructor()`);
    console.log(`current: ${share.color}, change: green`);
    share.setColor('green');
  }
}
