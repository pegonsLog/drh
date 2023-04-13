import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },

  {
    path: 'administrations',
    loadChildren: () =>
      import('src/app/administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },

  {
    path: 'users',
    loadChildren: () =>
      import('src/app/users/users.module').then((m) => m.UsersModule),
  },

  {
    path: 'drhs',
    loadChildren: () =>
      import('src/app/drhs/drhs.module').then((m) => m.DrhsModule),
  },
  {
    path: 'tres',
    loadChildren: () =>
      import('src/app/tres/tres.module').then((m) => m.TresModule),
  },
  {
    path: 'facultativos',
    loadChildren: () =>
      import('src/app/facultativos/facultativo.module').then((m) => m.FacultativoModule),
  },
  {
    path: 'escalas',
    loadChildren: () =>
      import('src/app/escalas/escalas.module').then((m) => m.EscalasModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
