import { Component, OnInit } from '@angular/core';
import { AppService } from './providers/app.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    public share: AppService
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
      this.share.openHome();
    }

  }
}
