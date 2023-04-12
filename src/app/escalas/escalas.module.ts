import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../_shared/angular-material/angular-material.module';
import { ConfirmationModule } from '../_shared/dialogs/confirmation/confirmation.module';
import { EscalasRoutingModule } from './escalas-routing.module';
import { FormEscalasComponent } from './form/form.component';
import { ListAdmEscalasComponent } from './list-adm/list-adm.component';
import { ListUserEscalasComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [ListUserEscalasComponent, ListAdmEscalasComponent, FormEscalasComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ConfirmationModule,
    EscalasRoutingModule
  ],
  exports: [ListUserEscalasComponent, ListAdmEscalasComponent, FormEscalasComponent],
})
export class EscalasModule {}
