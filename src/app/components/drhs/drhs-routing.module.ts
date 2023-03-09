import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDrhsComponent } from './list/list-drhs.component';
import { FormDrhComponent } from './form/form-drh.component';

const routes: Routes = [
  {path: '', component: ListDrhsComponent},
  {path: 'new', component: FormDrhComponent},
  {path: 'edit', component: FormDrhComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrhsRoutingModule { }
