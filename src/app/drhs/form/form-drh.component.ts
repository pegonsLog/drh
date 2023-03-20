import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drh } from 'src/app/shared/models/Drh';
import { DrhsService } from '../drhs.service';

@Component({
  selector: 'app-form-drh',
  templateUrl: './form-drh.component.html',
  styleUrls: ['./form-drh.component.scss'],
})
export class FormDrhComponent {
  role: string;
  drh: Drh = {
    id: 0,
    registration: '',
    period: '',
    date: '',
  };

  constructor(
    private drhsService: DrhsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    const user = this.route.snapshot.queryParams['user'];
    this.role = this.route.snapshot.queryParams['role'];
    this.drh = this.route.snapshot.data['drh'];
    if (user) {
      this.drh.registration = this.route.snapshot.queryParams['user'];
    }
  }
  ngOnInit(): void {
  }

  onSubmit() {}

  voltar() {
    this.location.back();
  }
}
