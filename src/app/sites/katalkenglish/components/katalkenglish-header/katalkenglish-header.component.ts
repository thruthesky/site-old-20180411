import { Component } from '@angular/core';
import { AppService } from '../../../../providers/app.service';
import { FireService } from '../../../../modules/firelibrary/core';

@Component({
  selector: 'katalkenglish-header',
  templateUrl: 'katalkenglish-header.component.html',
  styleUrls: ['katalkenglish-header.component.scss'],
})
export class KatalkEnglishHeaderComponent {
  constructor(
    public share: AppService,
    public fire: FireService
  ) {
    // console.log(`HeaderComponent:constructor()`);
    // console.log(`current: ${share.color}, change: red`);
    // share.setColor('red');
  }
  onClickLogout() {
    this.fire.user.logout();
    this.share.openHome();
  }
}

