import { Injectable, NgZone } from '@angular/core';
import { LanguageService } from './language.service';
import { Router } from '@angular/router';
import { Base } from '../modules/firelibrary/core';
import { XapiService, XapiUserService, XapiFileService, XapiLMSService } from '../modules/xapi/xapi.module';

import env from './../../environment';


export const SITE_KATALKENGLISH = 'katalkenglish';
export const SITE_ONTUE = 'ontue';
export const SITE_WITHCENTER = 'withcenter';

export interface SITE {
    ontue: boolean;
    withcenter: boolean;
    katalkenglish: boolean;
}



@Injectable()
export class AppService {
    color: string = null;

    /**
     * It prepares site code on booting. So, it won't be computed again on run time.
     * Use this whenever you need to determin if the user is using Stduent site or Teacher site
     *      and inside template whenever you need site code.
     *
     * This will not recompute anything and it's good to use in template.
     * @code
     *      <section id="ontue" *ngIf=" a.site.ontue ">
     */
    site: SITE = {
        ontue: false,
        katalkenglish: false,
        withcenter: false
    };

    /**
     * User's default photo
     */
    anonymousPhotoURL = 'assets/img/anonymous.png';

    constructor(
        public ngZone: NgZone,
        public router: Router,
        public language: LanguageService,
        public xapi: XapiService,
        public user: XapiUserService,
        public file: XapiFileService,
        public lms: XapiLMSService,
    ) {
        // console.log(`AppService::constructor()`);
        // this.setColor('white');


        Base.collectionDomain = 'database';
        this.site[this.getSite()] = true;

        console.log('urlBackend: ', env['urlBackend']);
        xapi.setServerUrl(env['urlBackend']);

        // this.language.setUserLanguage();
    }
    get isLogin() {
        return this.user.isLogin;
    }
    get isLogout() {
        return this.user.isLogout;
    }

    setColor(color) {
        this.color = color;
        console.log(`Color has been set to ${this.color}`);
    }
    getDomain() {
        return window.location.hostname;
    }
    /**
     * Returns user domain.
     * If the domain is 'localhost', then it returns 'localhost.com'
     */
    // getDomainAsEmailDomain() {
    //     const domain = this.getDomain();
    //     if (domain === 'localhost') {
    //         return 'localhost.com';
    //     } else {
    //         this.getDomain();
    //     }
    // }

    /**
     * Returns an email address of the user ID.
     * @param ID User ID of WordPress Backend
     */
    getFirebaseLoginEmail(ID): string {
        return 'user' + ID + '@wordpress.com';
    }


    private isKatalkenglishDomain() {
        return this.getDomain().indexOf(SITE_KATALKENGLISH) !== -1;
    }
    private isOntueDomain() {
        return this.getDomain().indexOf(SITE_ONTUE) !== -1;
    }
    private isWithcenterDomain() {
        return this.getDomain().indexOf(SITE_WITHCENTER) !== -1;
    }

    get studentTheme() {
        return this.site.katalkenglish;
    }
    get teacherTheme() {
        return this.site.ontue;
    }


    /**
     * Returns site code.
     */
    getSite() {
        if (this.isKatalkenglishDomain()) {
            return SITE_KATALKENGLISH;
        } else if (this.isOntueDomain()) {
            return SITE_ONTUE;
        } else if (this.isWithcenterDomain()) {
            return SITE_WITHCENTER;
        } else {
            return SITE_KATALKENGLISH;
        }
    }


    get homeUrl() {
        if (this.site.katalkenglish) {
            return '/';
        } else if (this.site.ontue) {
            return '/teacher';
        } else if (this.site.withcenter) {
            return 'franchise';
        } else {
            return '/';
        }
    }

    /**
     * Returns an object of keys/values of the HTTP query parameter.
     * @returns
     *      null if there is no Query String.
     *      Object of keys/values.
     *
     * @code
     *      console.log(this.getQueryString());
     *
     * @example
     *      Input: http://katalkenglish.org:4200/install/the/system?a=b&c=d
     *      Output: {a: "b", c: "d"}
     */
    getQueryString() {
        if (window.location.href.indexOf('?') === -1) {
            return null;
        }
        const vars = {};
        const hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (let i = 0; i < hashes.length; i++) {
            const hash = hashes[i].split('=');
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    /**
     * Returns the paths in an array.
     *
     * @example
     *      Input: http://katalkenglish.org:4200/install/the/system?a=b&c=d
     *      Output: ["install", "the", "system"]
     *
     *      Input: http://ontue.org:4200/
     *      Output: []
     *
     */
    getQuerySegments() {
        const location: Location = window.location;
        let path = location.href;
        /**
         * Remove after '?'
         */
        if (path.indexOf('?') !== -1) {
            path = location.href.substr(0, location.href.indexOf('?'));
        }
        /**
         * Remove first part. before instiali '/' for path.
         */
        path = path.replace('//', '');
        if (path.indexOf('/') === -1) { // if there is no '/'. it has no segment. @note all the URL shuold have ending '/'.
            return [];
        }
        path = path.substr(path.indexOf('/') + 1);
        if (!path) {
            return [];
        }

        return path.split('/');
    }

    /**
     * Re-draw the template view.
     * Call this method after asynchronous data display in view.
     * @param timeout timeout
     */
    rerender(timeout: number = 0) {
        setTimeout(() => this.ngZone.run(() => { }), timeout);
    }
    render(t?) {
        this.rerender(t);
    }

    /**
     * Move the route to domain's Home
     */
    openHome() {
        this.router.navigateByUrl(this.homeUrl);
    }
    openProfile() {
        this.router.navigateByUrl('/profile');
    }

    toast(msg) {
        if (msg.message) {
            alert(msg.message);
        } else {
            alert(msg);
        }
    }

    /**
     * Returns a random string.
     * @param prefix Prefix to add infront of the random string
     */
    randomString(prefix = ''): string {
        return prefix + (+new Date).toString(36).slice(-5);
    }
}
