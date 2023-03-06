import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './list/users.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

@NgModule({
  declarations: [UsersComponent, FormComponent],
  imports: [CommonModule, UsersRoutingModule, AngularMaterialModule],
  exports: [UsersComponent, FormComponent],
})
export class UsersModule {}
