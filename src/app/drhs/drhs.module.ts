import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideFirestore } from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { AngularMaterialModule } from '../_shared/angular-material/angular-material.module';
import { ConfirmationModule } from '../_shared/dialogs/confirmation/confirmation.module';
import { DrhsRoutingModule } from './drhs-routing.module';
import { FormDrhComponent } from './form/form-drh.component';
import { ListAdmDrhsComponent } from './list-adm/list-adm-drhs.component';
import { ListUsersDrhsComponent } from './list-user/list-user-drhs.component';

@NgModule({
  declarations: [
    FormDrhComponent,
    ListUsersDrhsComponent,
    ListAdmDrhsComponent,
  ],
  imports: [
    CommonModule,
    DrhsRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ConfirmationModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),

  ],
  exports: [FormDrhComponent, ListUsersDrhsComponent, ListAdmDrhsComponent],
  providers: [],
})
export class DrhsModule {}
