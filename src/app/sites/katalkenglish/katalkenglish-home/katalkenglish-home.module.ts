import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { KatalkEnglishHomePage } from './katalkenglish-home.page';
import { KatalkEnglishHeaderComponentModule } from '../components/katalkenglish-header/katalkenglish-header.module';
import { UserInfoComponentModule } from '../../../components/user-info/user-info.component.module';

const routes: Routes = [
  { path: '', component: KatalkEnglishHomePage }
];
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    KatalkEnglishHeaderComponentModule,
    UserInfoComponentModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    KatalkEnglishHomePage
  ],
  entryComponents: [
    KatalkEnglishHomePage
  ],
  bootstrap: [KatalkEnglishHomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KatalkEnglishHomePageModule { }
