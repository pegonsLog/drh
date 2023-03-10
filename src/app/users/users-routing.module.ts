import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUserComponent } from './form/form-user.component';
import { ListUsersComponent } from './list/list-users.component';

const routes: Routes = [
  {path: '', component: ListUsersComponent},
  {path: 'new', component: FormUserComponent},
  {path: 'edit', component: FormUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
