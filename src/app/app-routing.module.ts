import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full',
    loadChildren: './sites/katalkenglish/katalkenglish-home/katalkenglish-home.module#KatalkEnglishHomePageModule' },
  { path: 'help',
    loadChildren: './sites/katalkenglish/katalkenglish-help/katalkenglish-help.module#KatalkEnglishHelpPageModule' },
  { path: 'install',
    loadChildren: './sites/katalkenglish/katalkenglish-install/katalkenglish-install.module#KatalkEnglishInstallModule' },
  { path: 'register', loadChildren: './pages/register/register.page.module#RegisterPageModule' },


  /**
   * ontue.com for Teachers
   */
  { path: 'teacher',
    loadChildren: './sites/ontue/ontue-home/ontue-home.module#OntueHomePageModule' },


  /**
   * withcenter.com for Franchise web site.
   */
  { path: 'franchise', loadChildren: './sites/withcenter/withcenter-home/withcenter-home.module#WithcenterHomePageModule' },


  /**
   * Defaults
   */
  { path: '**', loadChildren:  './pages/not-found/not-found.module#NotFoundPageModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}



