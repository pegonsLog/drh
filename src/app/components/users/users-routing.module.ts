import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListUsersComponent } from './list/list-users.component';

const routes: Routes = [
  {path: '', component: ListUsersComponent},
  {path: 'new', component: FormComponent},
  {path: 'edit', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
