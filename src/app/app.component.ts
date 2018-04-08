import { Component, OnInit } from '@angular/core';
import { ShareService } from './providers/share.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    public router: Router,
    public share: ShareService
  ) {
    // console.log(`AppComponent:constructor()`);
    // console.log(`current: ${share.color}, change: black`);
    // share.setColor('black');

    this.openHomePage();
  }

  ngOnInit() {
  }
  openHomePage() {

    /**
     * Check if any route is accessed.
     */
    const segments = this.share.getQuerySegments();
    if (segments.length) {
      console.log('It has segment !!');
    } else {
      /**
       * If no route accessed. You need to show first page of each domain.
       */
      console.log('It has no segment. Opening front page of this domain', this.share.getDomain());
      this.router.navigateByUrl( this.share.homeUrl );
    }

  }
}
