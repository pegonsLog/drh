import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormEscalasComponent } from './form/form.component';
import { ListAdmEscalasComponent } from './list-adm/list-adm.component';
import { ListUserEscalasComponent } from './list-user/list-user.component';
import { EscalasResolver } from '../_resolvers/escala.resolver';

const routes: Routes = [
  {path: 'user', component: ListUserEscalasComponent},
  {path: 'adm5Ft76#$78&8uio&8#80976', component: ListAdmEscalasComponent},
  {path: 'new', component: FormEscalasComponent, resolve: {escala: EscalasResolver}},
  {path: 'edit/:id', component: FormEscalasComponent, resolve: {escala: EscalasResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscalasRoutingModule { }
