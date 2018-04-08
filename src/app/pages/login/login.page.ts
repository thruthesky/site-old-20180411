
import { Component, OnInit } from '@angular/core';
import { FireService, USER } from './../../modules/firelibrary/core';
import { AppService } from '../../providers/app.service';
import { Router } from '@angular/router';


@Component({
    selector: 'login-page',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

    email = '';
    password = '';
    constructor(
        public router: Router,
        public fire: FireService
    ) { }

    ngOnInit() {
    }

    onSubmitLoginForm(event: Event) {
        event.preventDefault();


        this.fire.user.login(this.email, this.password)
            .then(x => this.router.navigateByUrl('/'))
            .catch(e => alert(e.message));


        return false;
    }

}
