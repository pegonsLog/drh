import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../_shared/angular-material/angular-material.module';

@NgModule({
  declarations: [AdministrationComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    AngularMaterialModule,
    FormsModule,
  ],
  exports: [AdministrationComponent]
})
export class AdministrationModule {}
