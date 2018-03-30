import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HelpPage } from './help.page';
import { HeaderComponentModule } from '../../components/header/header.component.module';
const routes: Routes = [
    { path: '', component: HelpPage }
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
        HelpPage
    ],
    entryComponents: [
        HelpPage
    ],
    bootstrap: [HelpPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HelpModule { }
