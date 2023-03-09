import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTreComponent } from './form/form-tre.component';
import { ListTresComponent } from './list/list-tres.component';

const routes: Routes = [
  {path: '', component: ListTresComponent},
  {path: 'new', component: FormTreComponent},
  {path: 'edit', component: FormTreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TresRoutingModule { }
