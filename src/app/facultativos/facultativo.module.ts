import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../_shared/angular-material/angular-material.module';
import { ConfirmationModule } from '../_shared/dialogs/confirmation/confirmation.module';
import { FormFacultativoComponent } from './form/form-facultativo.component';
import { ListUserFacultativoComponent } from './list-user/list-user-facultativo.component';
import { ListAdmFacultativoComponent } from './list-adm/list-adm-facultativo.component';
import { FacultativoRoutingModule } from './facultativo-routing.module';

@NgModule({
  declarations: [FormFacultativoComponent, ListAdmFacultativoComponent, ListUserFacultativoComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ConfirmationModule,
    FacultativoRoutingModule
  ],
  exports: [FormFacultativoComponent, ListAdmFacultativoComponent, ListUserFacultativoComponent],
})
export class FacultativoModule {}
