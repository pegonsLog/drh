import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../_shared/angular-material/angular-material.module';
import { ConfirmationModule } from '../_shared/dialogs/confirmation/confirmation.module';
import { DrhsRoutingModule } from './drhs-routing.module';
import { FormDrhComponent } from './form/form-drh.component';
import { ListAdmDrhsComponent } from './list-adm/list-adm-drhs.component';
import { ListUsersDrhsComponent } from './list-user/list-user-drhs.component';

@NgModule({
  declarations: [
    FormDrhComponent,
    ListUsersDrhsComponent,
    ListAdmDrhsComponent,
  ],
  imports: [
    CommonModule,
    DrhsRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ConfirmationModule,

  ],
  exports: [FormDrhComponent, ListUsersDrhsComponent, ListAdmDrhsComponent],
  providers: [],
})
export class DrhsModule {}
