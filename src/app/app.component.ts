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

    /**
     * Check if any route is accessed.
     */
    const segments = share.getQuerySegments();
    if (segments.length) {

    } else {
      /**
       * If no route accessed. You need to show first page of each domain.
       */
      if (share.isKatalkenglishTheme()) {
        router.navigateByUrl('');
      } else if (share.isOntueTheme()) {
        router.navigateByUrl('/teacher');
      } else if (share.isWithcenterTheme()) {
        router.navigateByUrl('/franchise');
      } else {
        /**
         * For all unknown domain, go katalkenglish theme.
         */
        router.navigateByUrl('');
      }
    }

  }
}
