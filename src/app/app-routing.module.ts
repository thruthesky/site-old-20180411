import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full',
    loadChildren: './sites/katalkenglish/katalkenglish-home/katalkenglish-home.module#KatalkEnglishHomePageModule'
  },
  {
    path: 'help',
    loadChildren: './sites/katalkenglish/katalkenglish-help/katalkenglish-help.module#KatalkEnglishHelpPageModule'
  },
  {
    path: 'install',
    loadChildren: './sites/katalkenglish/katalkenglish-install/katalkenglish-install.module#KatalkEnglishInstallPageModule'
  },


  /**
   * ontue.com for Teachers
   */
  {
    path: 'teacher',
    loadChildren: './sites/ontue/ontue-home/ontue-home.module#OntueHomePageModule'
  },


  /**
   * withcenter.com for Franchise web site.
   */
  { path: 'franchise', loadChildren: './sites/withcenter/withcenter-home/withcenter-home.module#WithcenterHomePageModule' },


  /**
   * Common pages
   */
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterPageModule'
  },

  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },

  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule'
  },



  /**
   * Defaults
   */
  { path: '**', loadChildren: './pages/not-found/not-found.module#NotFoundPageModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}



