import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from '../resolvers/users.resolver';
import { FormUserComponent } from './form/form-user.component';
import { ListUsersComponent } from './list/list-users.component';

const routes: Routes = [
  {path: '', component: ListUsersComponent},
  {path: 'new', component: FormUserComponent, resolve: {user: UserResolver}},
  {path: 'edit/:id', component: FormUserComponent, resolve: {tre: UserResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
