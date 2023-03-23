import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from '../_resolvers/users.resolver';
import { FormUserComponent } from './form/form-user.component';
import { ListUsersComponent } from './list/list-users.component';

const routes: Routes = [
  {path: '', component: ListUsersComponent},
  {path: 'new9dkj%&kkh7898&8(jjj$5', component: FormUserComponent, resolve: {user: UserResolver}},
  {path: 'edit/:id', component: FormUserComponent, resolve: {user: UserResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
