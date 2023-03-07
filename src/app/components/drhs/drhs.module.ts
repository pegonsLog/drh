import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { ListDrhsComponent } from './list/list-drhs.component';
import { DrhsRoutingModule } from './drhs-routing.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [FormComponent, ListDrhsComponent],
  imports: [CommonModule, DrhsRoutingModule, AngularMaterialModule],
  exports: [FormComponent, ListDrhsComponent],
})
export class DrhsModule {}
