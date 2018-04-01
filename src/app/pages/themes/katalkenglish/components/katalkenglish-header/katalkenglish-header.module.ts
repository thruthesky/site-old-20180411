import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { KatalkEnglishHeaderComponent } from './katalkenglish-header.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: [
    KatalkEnglishHeaderComponent
  ],
  exports: [
    RouterModule,
    KatalkEnglishHeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KatalkEnglishHeaderComponentModule { }
