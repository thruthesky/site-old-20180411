import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { HeaderComponentModule } from '../../components/header/header.component.module';

const routes: Routes = [
  { path: '', component: HomePage }
];
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeaderComponentModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    HomePage
  ],
  entryComponents: [
    HomePage
  ],
  bootstrap: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
