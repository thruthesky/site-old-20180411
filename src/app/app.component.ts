import { Component } from '@angular/core';
import { HomePage } from './pages/home/home.page';
import { ShareService } from './providers/share.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(
    public router: Router,
    public share: ShareService
  ) {
    // console.log(`AppComponent:constructor()`);
    // console.log(`current: ${share.color}, change: black`);
    // share.setColor('black');

    if ( share.isKatalkenglishTheme() ) {
      router.navigateByUrl('');
    } else {
      router.navigateByUrl('/install');
    }
  }
}
