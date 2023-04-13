import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escala } from 'src/app/_shared/models/Escala';
import { EscalasService } from '../escalas.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormEscalasComponent {

  role: string;
  user: string;
  name: string;

  escala: Escala = {
    id: '',
    yearMonth: '',
    link: ''
  };

  constructor(
    private escalasService: EscalasService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.user = this.route.snapshot.queryParams['user'];
    this.name = this.route.snapshot.queryParams['name'];
    this.role = this.route.snapshot.queryParams['role'];
    this.escala = this.route.snapshot.data['escala'];
    }

  voltar() {
    this.location.back();
  }

  clear() {
    this.escala. yearMonth = '';
    this.escala. link = '';
  }

  onNew(escala: Escala) {
    this.escalasService
      .addEscala(escala)
      .then(() => {
        this.router.navigate(['/escalas/adm5Ft76#$78&8uio&8#80976'], {
          queryParams: { role: this.role, user: this.user, name: this.name },
        });
        this.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onUpdate(id: string, escala: Escala) {
    this.escalasService
    .update(escala, id)
    .then(() => {
      this.router.navigate(['/escalas/adm5Ft76#$78&8uio&8#80976'], {
        queryParams: { role: this.role, user: this.user, name: this.name },
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
