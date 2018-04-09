import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CommentComponent } from './comment.component';
import { CommentListComponent } from './comment-list.component';
import { FormsModule } from '@angular/forms';
import { DataComponentModule } from '../data/data.component.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    DataComponentModule
  ],
  declarations: [
    CommentComponent,
    CommentListComponent
  ],
  exports: [
    RouterModule,
    CommentComponent,
    CommentListComponent
  ],
  schemas: []
})
export class CommentComponentModule { }

