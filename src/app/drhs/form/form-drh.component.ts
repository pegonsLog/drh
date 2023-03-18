import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Drh } from 'src/app/shared/model/drh';
import { DrhsService } from '../drhs.service';

@Component({
  selector: 'app-form-drh',
  templateUrl: './form-drh.component.html',
  styleUrls: ['./form-drh.component.scss'],
})
export class FormDrhComponent {
  user: string;
  role: string;
 // data: Drh;
  drh: Drh = {
    id: 0,
    registration: '',
    period: '',
    date: '',
  };
  isEdit: boolean = false;

  constructor(
    private drhsService: DrhsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user = this.route.snapshot.queryParams['user'];
    this.role = this.route.snapshot.queryParams['role'];
    this.drh = this.route.snapshot.data['drh'];
  }
  ngOnInit(): void {
  
  }

  onSubmit() {}

  voltar() {
    this.router.navigate(['/drhs/adm'], {
      queryParams: {
        user: this.user,
        role: this.role,
      },
    });
  }
}
