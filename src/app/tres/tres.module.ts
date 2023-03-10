import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { FormTreComponent } from './form/form-tre.component';
import { ListAdmTresComponent } from './list-adm/list-adm-tres.component';
import { ListUserTresComponent } from './list-user/list-user-tres.component';
import { TresRoutingModule } from './tres-routing.module';

@NgModule({
  declarations: [FormTreComponent, ListUserTresComponent, ListAdmTresComponent],
  imports: [CommonModule, TresRoutingModule, AngularMaterialModule],
  exports: [FormTreComponent, ListUserTresComponent, ListAdmTresComponent],
})
export class TresModule {}
