import { Component } from '@angular/core';
import { AppService } from '../../providers/app.service';
import { FireService } from '../../modules/firelibrary/core';

@Component({
  selector: 'user-info-component',
  templateUrl: 'user-info.component.html',
  styleUrls: ['user-info.component.scss'],
})
export class UserInfoComponent {
  constructor(
    public share: AppService,
    public fire: FireService
  ) {
    // console.log(`HeaderComponent:constructor()`);
    // console.log(`current: ${share.color}, change: red`);
    // share.setColor('red');
  }
}



