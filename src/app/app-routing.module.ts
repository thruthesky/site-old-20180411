import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full',
    loadChildren: './sites/katalkenglish/katalkenglish-home/katalkenglish-home.module#KatalkEnglishHomePageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HelpModule' },
  { path: 'install', loadChildren: './pages/install/install.module#InstallModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterModule' },


  /**
   * Teacher
   */
  { path: 'teacher', loadChildren: './sites/ontue/ontue-home/ontue-home.module#OntueHomePageModule' },
  { path: '**', loadChildren:  './sites/katalkenglish/katalkenglish-home/katalkenglish-home.module#KatalkEnglishHomePageModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}



