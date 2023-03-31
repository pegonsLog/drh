import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drh } from 'src/app/_shared/models/Drh';
import { DrhsService } from '../drhs.service';

@Component({
  selector: 'app-form-drh',
  templateUrl: './form-drh.component.html',
  styleUrls: ['./form-drh.component.scss'],
})
export class FormDrhComponent {
  role: string;
  user: string;
  name: string;
  drh: Drh = {
    id: '',
    registration: '',
    period: '',
    date: '',
  };
  dateMask = { mask: '99/99/9999' };

  constructor(
    private drhsService: DrhsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.user = this.route.snapshot.queryParams['user'];
    this.name = this.route.snapshot.queryParams['name'];
    this.role = this.route.snapshot.queryParams['role'];
    this.drh = this.route.snapshot.data['drh'];
    if (this.user) {
      this.drh.registration = this.route.snapshot.queryParams['user'];
    }
    if(!this.drh.date){
      this.drh.date = 'Disponível'
    }
  }

  voltar() {
    this.location.back();
  }

  clear() {
    this.drh.period = '';
    this.drh.date = '';
  }

  onNew(drh: Drh) {
    this.drhsService
      .addDrh(drh)
      .then(() => {
        this.router.navigate(['/drhs/adm5Ft76#$78&8uio&8#33356'], {
          queryParams: { role: this.role, user: this.user, name: this.name },
        });
        this.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onUpdate(id: string, drh: Drh) {
    this.drhsService
    .update(drh, id)
    .then(() => {
      this.router.navigate(['/drhs/adm5Ft76#$78&8uio&8#33356'], {
        queryParams: { role: this.role, user: this.user, name: this.name },
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
