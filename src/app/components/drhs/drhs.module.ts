import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { ListDrhsComponent } from './list/list-drhs.component';
import { DrhsRoutingModule } from './drhs-routing.module';
import { FormDrhComponent } from './form/form-drh.component';

@NgModule({
  declarations: [FormDrhComponent, ListDrhsComponent],
  imports: [CommonModule, DrhsRoutingModule, AngularMaterialModule],
  exports: [FormDrhComponent, ListDrhsComponent],
  providers: [],
})
export class DrhsModule {}
