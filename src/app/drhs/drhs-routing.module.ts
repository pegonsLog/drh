import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ListUsersDrhsComponent } from './list-user/list-user-drhs.component';
import { FormDrhComponent } from './form/form-drh.component';
import { ListAdmDrhsComponent } from './list-adm/list-adm-drhs.component';
import { AuthAdmGuard } from '../guards/auth-adm.guard';
import { AuthCommonGuard } from '../guards/auth-common.guard';

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
