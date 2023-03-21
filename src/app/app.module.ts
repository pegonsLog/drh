import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { AdministrationModule } from './administration/administration.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrhsModule } from './drhs/drhs.module';
import { LoginModule } from './login/login.module';
import { TresModule } from './tres/tres.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LoginModule,
    UsersModule,
    DrhsModule,
    TresModule,
    HttpClientModule,
    AdministrationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
