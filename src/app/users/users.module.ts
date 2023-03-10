import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FormUserComponent } from './form/form-user.component';
import { ListUsersComponent } from './list/list-users.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';

@NgModule({
  declarations: [ListUsersComponent, FormUserComponent],
  imports: [CommonModule, UsersRoutingModule, AngularMaterialModule],
  exports: [ListUsersComponent, FormUserComponent],
})
export class UsersModule {}
