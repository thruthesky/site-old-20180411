import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
