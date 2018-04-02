import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { OntueHomePage } from './ontue-home.page';
import { OntueHeaderComponentModule } from '../components/ontue-header/ontue-header.module';

const routes: Routes = [
  { path: '', component: OntueHomePage }
];
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    OntueHeaderComponentModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    OntueHomePage
  ],
  entryComponents: [
    OntueHomePage
  ],
  bootstrap: [OntueHomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OntueHomePageModule { }