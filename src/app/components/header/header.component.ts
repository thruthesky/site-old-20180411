import { Component } from '@angular/core';
import { ShareService } from '../../providers/share.service';

@Component({
  selector: 'app-component-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public share: ShareService
  ) {
    console.log(`HeaderComponent:constructor()`);
    console.log(`current: ${share.color}, change: red`);
    share.setColor('red');
  }
}


