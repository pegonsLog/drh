import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './list/users.component';

const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'new', component: FormComponent},
  {path: 'edit', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
