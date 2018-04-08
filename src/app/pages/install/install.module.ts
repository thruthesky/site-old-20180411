import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


import { InstallPage } from './install.page';

const routes: Routes = [
  { path: '', component: InstallPage }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    InstallPage
  ],
  entryComponents: [
    InstallPage
  ],
  bootstrap: [InstallPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InstallModule { }
