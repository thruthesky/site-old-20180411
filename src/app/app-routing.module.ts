import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full',
    loadChildren: './pages/themes/katalkenglish/katalkenglish-home/katalkenglish-home.module#KatalkEnglishHomePageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HelpModule' },
  { path: 'install', loadChildren: './pages/install/install.module#InstallModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterModule' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
