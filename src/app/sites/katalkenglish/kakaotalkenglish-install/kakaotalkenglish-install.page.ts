import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../../providers/share.service';
import { FireService } from '../../../modules/firelibrary/core';
import { Router } from '@angular/router';


@Component({
  selector: 'katalkenglish-install-page',
  templateUrl: 'katalkenglish-install.page.html',
  styleUrls: ['katalkenglish-install.page.scss'],
})
export class KatalkEnglishInstallPage implements OnInit {
  constructor(
    public router: Router,
    public share: ShareService,
    public fire: FireService
  ) {
    console.log(router.url);
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



