import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserFacultativoComponent } from './list-user/list-user-facultativo.component';
import { FormFacultativoComponent } from './form/form-facultativo.component';
import { ListAdmFacultativoComponent } from './list-adm/list-adm-facultativo.component';
import { FacultativoResolver } from '../_resolvers/facultativo.resolver';


const routes: Routes = [
  {path: 'user', component: ListUserFacultativoComponent},
  {path: 'adm5Ft76#$78&8uio&8#33356', component: ListAdmFacultativoComponent},
  {path: 'new', component: FormFacultativoComponent, resolve: {facultativo: FacultativoResolver}},
  {path: 'edit/:id', component: FormFacultativoComponent, resolve: {facultativo: FacultativoResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultativoRoutingModule { }
