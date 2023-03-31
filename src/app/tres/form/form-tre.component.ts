import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tre } from 'src/app/_shared/models/Tre';
import { TresService } from '../tres.service';

@Component({
  selector: 'app-form-tre',
  templateUrl: './form-tre.component.html',
  styleUrls: ['./form-tre.component.scss'],
})
export class FormTreComponent {
  role: string;
  user: string;
  name: string;

  tre: Tre = {
    id: '',
    registration: '',
    year: '',
    date: '',
  };
  constructor(
    private tresService: TresService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.user = this.route.snapshot.queryParams['user'];
    this.name = this.route.snapshot.queryParams['name'];
    this.role = this.route.snapshot.queryParams['role'];
    this.tre = this.route.snapshot.data['tre'];
    if (this.user) {
      this.tre.registration = this.route.snapshot.queryParams['user'];
    }
    if(!this.tre.date){
      this.tre.date = 'Disponível'
    }
  }

  onNew(tre: Tre) {
    this.tresService
      .addTre(tre)
      .then(() => {
        this.router.navigate(['/tres/adm5Ft76#$78&8uio&8#80976'], {
          queryParams: { role: this.role, user: this.user, name: this.name },
        });
        this.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onUpdate(id: string, tre: Tre) {
    this.tresService
      .update(tre, id)
      .then(() => {
        this.router.navigate(['/tres/adm5Ft76#$78&8uio&8#80976'], {
          queryParams: { role: this.role, user: this.user, name: this.name },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  voltar() {
    this.location.back();
  }

  clear() {
    this.tre.year = '';
    this.tre.date = '';
  }
}
