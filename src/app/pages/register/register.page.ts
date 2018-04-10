
import { Component, OnInit } from '@angular/core';
import { FireService, USER } from './../../modules/firelibrary/core';
import { AppService } from '../../providers/app.service';
import { USER_REGISTER, USER_REGISTER_RESPONSE } from '../../modules/xapi/interfaces';


@Component({
    selector: 'app-component-register',
    templateUrl: 'register.page.html',
    styleUrls: ['register.page.scss'],
})
export class RegisterPage implements OnInit {

    user = <USER>{};
    loader = false;
    constructor(
        public fire: FireService,
        public a: AppService,
    ) { }

    ngOnInit() {
        // this.user.email = 'test' + (new Date).getTime() + '@user.com';
        // this.user.password = this.user.email;
        // this.user.displayName = 'Name';
        // this.onSubmitRegisterForm();
    }

    onSubmitRegisterForm(event?: Event) {

        if (event) {
            event.preventDefault();
        }

        const data: USER_REGISTER = {
            user_login: this.user.email,
            user_email: this.user.email,
            user_pass: this.user.password,
            kakaotalk_id: 'test',
        };

        this.a.user.register(data).subscribe(re => { /// Registration success
            console.log(`user.register => success: re: `, re);
            this.registerFirebase(data, re);
        }, e => {
            console.log('Error on register: ', e);
            this.a.toast(e);
        });


        return false;

    }
    registerFirebase(data: USER_REGISTER, response: USER_REGISTER_RESPONSE) {

        console.log('registerFirebase() data: ', data, ' response: ', response);

        const regData: USER = {
            email: 'email' + response.ID + '@gmail.com',
            password: response.session_id
        };
        this.fire.user.register(regData).then(() => {
            console.log('user register: ');
            this.fire.auth.onAuthStateChanged(user => {
                if (user) {
                    this.fire.user.create(this.user).then(re => {
                        console.log('User registration comeplete!', re);
                        this.a.openProfile();
                    }).catch(e => {
                        this.a.toast(e);
                    });
                }
            });
        })
            .catch(e => {
                this.a.toast(e);
            });

    }
}
