import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrhsService } from '../../drhs/drhs.service';
import { TresService } from '../tres.service';
import { Location } from '@angular/common';
import { Tre } from 'src/app/shared/models/Tre';

@Component({
  selector: 'app-form-tre',
  templateUrl: './form-tre.component.html',
  styleUrls: ['./form-tre.component.scss'],
})
export class FormTreComponent {

  role: string;

  tre: Tre = {
    id: 0,
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

    const user = this.route.snapshot.queryParams['user'];
    this.role = this.route.snapshot.queryParams['role'];
    this.tre = this.route.snapshot.data['tre'];
    if(user){
      this.tre.registration = this.route.snapshot.queryParams['user'];
    }
    console.log(user)
  }

  onSubmit() {}

  voltar() {
    this.location.back();
  }
}
