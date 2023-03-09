import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TresRoutingModule } from './tres-routing.module';
import { FormTreComponent } from './form/form-tre.component';
import { ListTresComponent } from './list/list-tres.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

@NgModule({
  declarations: [FormTreComponent, ListTresComponent],
  imports: [CommonModule, TresRoutingModule, AngularMaterialModule],
  exports: [FormTreComponent, ListTresComponent],
})
export class TresModule {}
