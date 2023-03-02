import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('src/app/components/login/login.module').then(
  //       (m) => m.LoginModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
