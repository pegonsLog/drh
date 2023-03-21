import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { ConfirmationDialogComponent } from './confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MatDialogModule
  ],
  entryComponents: [ConfirmationDialogComponent]

})
export class ConfirmationModule { }
