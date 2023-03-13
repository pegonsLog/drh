import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdmGuard } from './guards/auth-adm.guard';
import { AuthUserGuard } from './guards/auth-user.guard';
import { LoginComponent } from './login/login.component';
import { AuthCommonGuard } from './guards/auth-common.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },

  {
    path: 'users',
    loadChildren: () =>
      import('src/app/users/users.module').then(
        (m) => m.UsersModule
      ),
      canActivate: [AuthUserGuard]
  },

  {
    path: 'drhs',
    loadChildren: () =>
      import('src/app/drhs/drhs.module').then(
        (m) => m.DrhsModule
      ),
      canActivate: [AuthAdmGuard, AuthCommonGuard]
  },
  {
    path: 'tres',
    loadChildren: () =>
      import('src/app/tres/tres.module').then(
        (m) => m.TresModule
      ),
     canActivate: [AuthAdmGuard, AuthCommonGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
