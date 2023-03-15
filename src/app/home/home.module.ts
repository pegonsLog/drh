import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, AngularMaterialModule],
  exports: [HomeComponent],
})
export class HomeModule {}
