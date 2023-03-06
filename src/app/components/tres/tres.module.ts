import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TresRoutingModule } from './tres-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [CommonModule, TresRoutingModule, AngularMaterialModule],
  exports: [FormComponent, ListComponent],
})
export class TresModule {}
