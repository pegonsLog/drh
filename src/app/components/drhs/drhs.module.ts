import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrhsComponent } from './drhs.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    DrhsComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DrhsModule { }
