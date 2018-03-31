import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../providers/share.service';
import { FireService } from '../../modules/firelibrary/core';

@Component({
  selector: 'app-page-install',
  templateUrl: 'install.page.html',
  styleUrls: ['install.page.scss'],
})
export class InstallPage implements OnInit {
  constructor(
    public share: ShareService,
    public fire: FireService
  ) {
    // console.log(`InstallPage:constructor()`);
    // console.log(`current: ${share.color}, change: brown`);
    // share.setColor('brown');
  }

  ngOnInit() {
    //
  }


  onSubmitInstall(event: Event) {
    event.preventDefault();
    console.log(`Going to set ${this.fire.user.email} as admin`);
    this.fire.install({ email: this.fire.user.email }).then(re => {
      console.log('install: ', re);
    })
      .catch(e => alert(e.message));
    return false;
  }
}
