import { Component } from '@angular/core';
import { HomePage } from './pages/home/home.page';
import { ShareService } from './providers/share.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  ontue = false;
  katalkenglish = false;
  withcenter = false;
  constructor(
    public router: Router,
    public share: ShareService
  ) {
    // console.log(`AppComponent:constructor()`);
    // console.log(`current: ${share.color}, change: black`);
    // share.setColor('black');


    if (share.isKatalkenglishTheme()) {
      this.katalkenglish = true;
      router.navigateByUrl('');
    } else if (share.isOntueTheme()) {
      this.ontue = true;
      router.navigateByUrl('/teacher');
    } else if (share.isWithcenterTheme()) {
      console.log('do i come here?');
      this.withcenter = true;
      router.navigateByUrl('/franchise');
    } else {
      this.katalkenglish = true;
      /**
       * For all unknown domain, go katalkenglish theme.
       */
      router.navigateByUrl('');
    }

    /**
     * Check if any route is accessed.
     */
    const segments = share.getQuerySegments();
    if (segments.length) {
      console.log('It has segment !!');
    } else {
      /**
       * If no route accessed. You need to show first page of each domain.
       */
    }

  }
}
