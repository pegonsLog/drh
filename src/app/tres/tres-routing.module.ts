import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreResolver } from '../_resolvers/tre.resolver';
import { FormTreComponent } from './form/form-tre.component';
import { ListAdmTresComponent} from './list-adm/list-adm-tres.component';
import { ListUserTresComponent } from './list-user/list-user-tres.component';

const routes: Routes = [
  {path: 'user', component: ListUserTresComponent},
  {path: 'adm5Ft76#$78&8uio&8#80976', component: ListAdmTresComponent},
  {path: 'new', component: FormTreComponent, resolve: {tre: TreResolver}},
  {path: 'edit/:id', component: FormTreComponent, resolve: {tre: TreResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TresRoutingModule { }
