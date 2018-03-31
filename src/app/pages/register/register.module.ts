import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HeaderComponentModule } from '../../components/header/header.component.module';
import { RegisterPage } from './register.page';



const routes: Routes = [
  { path: '', component: RegisterPage }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderComponentModule
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterModule { }
