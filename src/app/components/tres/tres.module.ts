import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TresRoutingModule } from './tres-routing.module';
import { FormComponent } from './form/form.component';
import { ListTresComponent } from './list/list-tres.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

@NgModule({
  declarations: [FormComponent, ListTresComponent],
  imports: [CommonModule, TresRoutingModule, AngularMaterialModule],
  exports: [FormComponent, ListTresComponent],
})
export class TresModule {}
