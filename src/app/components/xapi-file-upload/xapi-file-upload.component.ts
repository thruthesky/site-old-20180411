/**
 *
 * @see https://docs.google.com/document/d/1ZpGsmKhnjqE9estnjr_vl9DcjdpeMSgxTz4B4eoTm7c/edit#heading=h.ehcawgq9o2ps
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AppService } from './../../providers/app.service';
import { FILES, FILE, FILE_DELETE } from '../../modules/xapi/interfaces';

declare var Camera;
declare var navigator;
declare var FileUploadOptions;
declare var FileTransfer;

@Component({
    selector: 'xapi-file-upload-component',
    templateUrl: 'xapi-file-upload.component.html',
    styleUrls: ['xapi-file-upload.component.scss']
})
export class XapiFileUploadComponent {
    url: string;
    progressPercentage = 0;
    @Input() files: FILES;
    @Input() post_password;
    @Input() title = true;
    @Input() fileSelectionButton = true;
    @Input() showUploadedFiles = true;
    @Output() success = new EventEmitter<any>();

    @Input() titleText = 'File Upload';

    constructor(public a: AppService) {
        this.url = this.a.xapi.getServerUrl();
        document.addEventListener('deviceready', () => this.onDeviceReady(), false);
    }

    onDeviceReady() {
        // console.log("Cordova is ready.");
    }

    ionViewDidLoad() {
        if (!this.files) {
            alert(`[files] property for binding is not initialized on template.`);
        }
    }

    /**
     * @todo Have to update with Capacitor.
     */
    onClickCamera() {

        // if (!this.a.xapi.isCordova()) return;

        // let confirm = this.alertCtrl.create({
        //   title: this.a.i18n["PHOTO UPLOAD"],
        //   message: this.a.i18n["CHOOSE USER TYPE"],
        //   buttons: [
        //     {
        //       text: this.a.i18n["CAMERA"],
        //       handler: () => {
        //         // console.log('camera');
        //         this.takePhoto('camera');
        //       }
        //     },
        //     {
        //       text: this.a.i18n["GALLERY"],
        //       handler: () => {
        //         // console.log('gallery');
        //         this.takePhoto('gallery');
        //       }
        //     },
        //     {
        //       text: this.a.i18n["CANCEL"],
        //       handler: () => {
        //         // console.log('cancel');
        //         this.takePhoto('cancel');
        //       }
        //     }
        //   ]
        // });
        // confirm.present();
    }

    takePhoto(code) {
        // let type = null;

        // if (code == 'camera') {
        //   // get the picture from camera.
        //   type = Camera.PictureSourceType.CAMERA;
        // }
        // else if (code == 'gallery') {
        //   // get the picture from library.
        //   type = Camera.PictureSourceType.PHOTOLIBRARY
        // }
        // else return;

        // // console.log("in cordova, type: ", type);

        // let options = {
        //   quality: 90,
        //   sourceType: type
        // };
        // navigator.camera.getPicture(path => {
        //   // console.log('photo: ', path);
        //   // alert(path);
        //   // transfer the photo to the server.
        //   this.cordovaTransferFile(path);
        // }, e => {
        //   // console.error('camera error: ', e);
        //   this.a.alert(this.a.i18n["CAMERA ERROR"]);
        // }, options);
    }

    cordovaTransferFile(filePath: string) {
        // var options = new FileUploadOptions();
        // options.fileKey = "userfile";
        // options.fileName = filePath.substr(filePath.lastIndexOf('/') + 1) + '.jpg';
        // options.mimeType = "image/jpeg";
        // var params = {route: 'file.upload', session_id: this.a.user.sessionId};
        // options.params = params;


        // var ft = new FileTransfer();

        // let percentage = 0;
        // ft.onprogress = progressEvent => {
        //   if (progressEvent.lengthComputable) {
        //     // console.log(`percentage: ${progressEvent.loaded} / ${progressEvent.total}`);
        //     try {
        //       percentage = Math.round(progressEvent.loaded / progressEvent.total * 100);
        //     }
        //     catch (e) {
        //       // console.error( 'percentage computation error' );
        //       percentage = 10;
        //     }
        //   }
        //   else percentage = 10; // progressive does not work. it is not computable.
        //   console.log('percentage: ', percentage);
        //   this.onProgress(percentage);
        // };

        // let uri = encodeURI(this.url);

        // // console.log(filePath);
        // // console.log(uri);
        // // console.log(options);

        // ft.upload(filePath, uri, r => {
        //   // console.log("Code = " + r.responseCode);
        //   // console.log("Response = " + r.response);
        //   // console.log("Sent = " + r.bytesSent);
        //   let re;
        //   try {
        //     re = JSON.parse(r.response);
        //   }
        //   catch (e) {
        //     this.a.showAlert(this.a.i18n["JSON PARSE ERROR"]);
        //     return;
        //   }

        //   if (re['code'] == 0) {
        //     this.insertFile(re['data']);
        //   }
        //   else this.a.showError(re);


        // }, e => {
        //   // console.log("Upload Error: e: ", e);
        //   // console.log("upload error source " + e.source);
        //   // console.log("upload error target " + e.target);
        //   this.a.showAlert(e.code);
        //   this.onUploadFailure();
        // }, options);
    }

    onChangeFile($event) {
        // console.log('onChangeFile', event);
        // if (this.a.xapi.isCordova()) return;
        // console.log('onChangeFile', event);
        this.a.file.uploadForm($event).subscribe(event => {
            // console.log(event);
            if (typeof event === 'number') {
                // console.log(`File is ${event}% uploaded.`);
                this.onProgress(event);
            } else if (event.id !== void 0) {
                // console.log('File is completely uploaded!');
                // console.log(event);
                this.insertFile(event);
            } else if (event === null) {
                // console.log("what is it?");
            } else if (event['code']) {
                this.a.toast(event);
            }
        }, (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occurred.');
            } else {
                // console.log(err);
                if (err.message === 'file_is_not_selected' || err.message === 'file_is_not_selected_or_file_does_not_exist') {
                    this.a.toast('NO FILE SELECTED');
                } else {
                    this.a.toast('FILE TOO LARGE' + err.message);
                }
            }
            this.onUploadFailure();
        });
    }

    onClickDeleteButton(file) {
        this.deleteFile(file);
    }

    /**
     *
     * Deletes a file.
     *
     * @param file - file information.
     *            It is passed by reference
     *            BUT IT IS SAFE to do something with the file information on parent
     *            BECAUSE it is copying the id, post_password and use it on its own memory.
     *
     * @param successCallback
     * @param failureCallback
     */
    deleteFile(file: FILE, successCallback = null, failureCallback = null) {
        if (!file || !file.id) {
            this.a.toast('FILE EMPTY');
            return;
        }
        const data: FILE_DELETE = {};

        data.id = file.id;
        data.post_password = this.post_password;

        this.a.file.delete(data).subscribe(id => {
            // console.log("file deleted: ", id);
            // this.files = this.files.filter( file => file.id != id ); //
            const index = this.files.findIndex(f => f.id === id);
            this.files.splice(index, 1);
            // console.log('onClickDeleteButton::', this.files);
            if (successCallback) {
                successCallback();
            }
            this.a.xapi.render();
        }, err => {
            if (failureCallback) {
                failureCallback();
            }
            this.a.toast(err);
        });

    }

    onProgress(p: number) {
        this.progressPercentage = p;
        this.a.xapi.render();
    }

    insertFile(file) {
        this.files.push(file);
        // console.log("this.files: ", this.files);
        this.progressPercentage = 0;
        this.success.emit(file);
        this.a.xapi.render();
    }

    onUploadFailure() {
        this.progressPercentage = 0;
    }


}
