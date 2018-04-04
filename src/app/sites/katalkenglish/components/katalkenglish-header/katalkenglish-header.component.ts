import { Component } from '@angular/core';
import { ShareService } from '../../../../providers/share.service';
import { FireService } from '../../../../modules/firelibrary/core';

@Component({
  selector: 'katalkenglish-header',
  templateUrl: 'katalkenglish-header.component.html',
  styleUrls: ['katalkenglish-header.component.scss'],
})
export class KatalkEnglishHeaderComponent {
  constructor(
    public share: ShareService,
    public fire: FireService
  ) {
    // console.log(`HeaderComponent:constructor()`);
    // console.log(`current: ${share.color}, change: red`);
    // share.setColor('red');
  }
}

