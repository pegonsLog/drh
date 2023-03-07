import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormComponent } from './form/form.component';
import { ListUsersComponent } from './list/list-users.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';

@NgModule({
  declarations: [ListUsersComponent, FormComponent],
  imports: [CommonModule, UsersRoutingModule, AngularMaterialModule],
  exports: [ListUsersComponent, FormComponent],
})
export class UsersModule {}
