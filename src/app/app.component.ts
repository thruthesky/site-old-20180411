import { Component } from '@angular/core';
import { HomePage } from './pages/home/home.page';
import { ShareService } from './providers/share.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(
    public share: ShareService
  ) {
    console.log(`AppComponent:constructor()`);
    console.log(`current: ${share.color}, change: black`);
    share.setColor('black');
  }
}
