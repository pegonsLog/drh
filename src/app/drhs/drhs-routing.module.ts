import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrhResolver } from '../_resolvers/drh.resolver';
import { FormDrhComponent } from './form/form-drh.component';
import { ListAdmDrhsComponent } from './list-adm/list-adm-drhs.component';
import { ListUsersDrhsComponent } from './list-user/list-user-drhs.component';

const routes: Routes = [
  {path: 'user', component: ListUsersDrhsComponent},
  {path: 'adm5Ft76#$78&8uio&8#33356', component: ListAdmDrhsComponent},
  {path: 'new', component: FormDrhComponent, resolve: {drh: DrhResolver}},
  {path: 'edit/:id', component: FormDrhComponent, resolve: {drh: DrhResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrhsRoutingModule { }
