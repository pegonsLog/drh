import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { ListDrhsComponent } from './list/list-drhs.component';
import { DrhsRoutingModule } from './drhs-routing.module';
import { FormDrhComponent } from './form/form-drh.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [FormDrhComponent, ListDrhsComponent],
  imports: [CommonModule, DrhsRoutingModule, AngularMaterialModule, NgxMaskDirective, NgxMaskPipe],
  exports: [FormDrhComponent, ListDrhsComponent],
  providers: [provideNgxMask()],
})
export class DrhsModule {}
