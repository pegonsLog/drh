import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'users',
    loadChildren: () =>
      import('src/app/users/users.module').then(
        (m) => m.UsersModule
      ),
  },

  {
    path: 'drhs',
    loadChildren: () =>
      import('src/app/drhs/drhs.module').then(
        (m) => m.DrhsModule
      ),
  },
  {
    path: 'tres',
    loadChildren: () =>
      import('src/app/tres/tres.module').then(
        (m) => m.TresModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
