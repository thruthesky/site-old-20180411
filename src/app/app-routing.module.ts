import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full',
    loadChildren: './sites/katalkenglish/katalkenglish-home/katalkenglish-home.module#KatalkEnglishHomePageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HelpModule' },
  { path: 'install', loadChildren: './pages/install/install.module#InstallModule' },
  { path: 'register', loadChildren: './pages/register/register.page.module#RegisterPageModule' },


  /**
   * ontue.com for Teachers
   */
  { path: 'teacher', loadChildren: './sites/ontue/ontue-home/ontue-home.module#OntueHomePageModule' },


  /**
   * withcenter.com for Franchise web site.
   */
  { path: 'franchise', loadChildren: './sites/withcenter/withcenter-home/withcenter-home.module#WithcenterHomePageModule' },


  /**
   * Defaults
   */
  { path: '**', loadChildren:  './sites/katalkenglish/katalkenglish-home/katalkenglish-home.module#KatalkEnglishHomePageModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}



