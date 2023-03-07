import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListTresComponent } from './list/list-tres.component';

const routes: Routes = [
  {path: '', component: ListTresComponent},
  {path: 'new', component: FormComponent},
  {path: 'edit', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TresRoutingModule { }
