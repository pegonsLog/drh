import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDrhComponent } from './form/form-drh.component';
import { ListAdmDrhsComponent } from './list-adm/list-adm-drhs.component';
import { ListUsersDrhsComponent } from './list-user/list-user-drhs.component';

const routes: Routes = [
  {path: 'user', component: ListUsersDrhsComponent},
  {path: 'adm', component: ListAdmDrhsComponent},
  {path: 'new', component: FormDrhComponent},
  {path: 'edit', component: FormDrhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrhsRoutingModule { }
