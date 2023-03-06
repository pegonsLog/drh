import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../tres/list/list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'new', component: FormComponent},
  {path: 'edit', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrhsRoutingModule { }
