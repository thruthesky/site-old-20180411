import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Route } from '@angular/router';
import { ForumPage } from './forum.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const AppRoutes: Array<Route> = [
    { component: ForumPage, path: ''  }
];

@NgModule({
    declarations: [
        ForumPage
    ],
    entryComponents: [
        ForumPage
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild( AppRoutes )
    ],
    bootstrap: [
        ForumPage
    ]
})
export class ForumPageModule {}
