import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { RegisterPage } from './register.page';
import { TranslatePipeModule } from '../../pipes/translate/translate.pipe.module';
import { XapiFileUploadComponentModule } from '../../components/xapi-file-upload/xapi-file-upload.component.module';



const routes: Routes = [
  { path: '', component: RegisterPage }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslatePipeModule,
    XapiFileUploadComponentModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    RegisterPage
  ],
  entryComponents: [
    RegisterPage
  ],
  bootstrap: [RegisterPage],
  schemas: []
})
export class RegisterPageModule { }
