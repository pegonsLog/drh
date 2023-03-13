import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTreComponent } from './form/form-tre.component';
import { ListAdmTresComponent} from './list-adm/list-adm-tres.component';
import { ListUserTresComponent } from './list-user/list-user-tres.component';

const routes: Routes = [
  {path: 'user', component: ListUserTresComponent},
  {path: 'adm', component: ListAdmTresComponent},
  {path: 'new', component: FormTreComponent},
  {path: 'edit', component: FormTreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TresRoutingModule { }
