import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facultativo } from 'src/app/_shared/models/Facultativo';
import { FacultativoService } from '../facultativo.service';

@Component({
  selector: 'app-form-facultativo',
  templateUrl: './form-facultativo.component.html',
  styleUrls: ['./form-facultativo.component.scss']
})
export class FormFacultativoComponent {
  role: string;
  user: string;
  name: string;
  facultativo: Facultativo = {
    id: '',
    registration: '',
    day: '',
    date: '',
  };

  constructor(
    private facultativosService: FacultativoService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.user = this.route.snapshot.queryParams['user'];
    this.name = this.route.snapshot.queryParams['name'];
    this.role = this.route.snapshot.queryParams['role'];
    this.facultativo = this.route.snapshot.data['facultativo'];
    if (this.user) {
      this.facultativo.registration = this.route.snapshot.queryParams['user'];
    }
    if(!this.facultativo.date){
      this.facultativo.date = 'Disponível'
    }
  }

  voltar() {
    this.location.back();
  }

  clear() {
    this.facultativo.day = '';
    this.facultativo.date = '';
  }

  onNew(facultativo: Facultativo) {
    this.facultativosService
      .addFacultativo(facultativo)
      .then(() => {
        this.router.navigate(['/facultativos/adm5Ft76#$78&8uio&8#33356'], {
          queryParams: { role: this.role, user: this.user, name: this.name },
        });
        this.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onUpdate(id: string, facultativo: Facultativo) {
    this.facultativosService
    .update(facultativo, id)
    .then(() => {
      this.router.navigate(['/facultativos/adm5Ft76#$78&8uio&8#33356'], {
        queryParams: { role: this.role, user: this.user, name: this.name },
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
