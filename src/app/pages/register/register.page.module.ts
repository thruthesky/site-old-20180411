import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { RegisterPage } from './register.page';



const routes: Routes = [
  { path: '', component: RegisterPage }
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
    RegisterPage
  ],
  entryComponents: [
    RegisterPage
  ],
  bootstrap: [RegisterPage],
  schemas: []
})
export class RegisterPageModule { }
