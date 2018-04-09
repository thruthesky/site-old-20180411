import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { LoginPage } from './login.page';



const routes: Routes = [
  { path: '', component: LoginPage }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LoginPage
  ],
  entryComponents: [
    LoginPage
  ],
  bootstrap: [LoginPage],
  schemas: []
})
export class LoginPageModule { }
