import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrhsService } from '../drhs.service';

@Component({
  selector: 'app-form-drh',
  templateUrl: './form-drh.component.html',
  styleUrls: ['./form-drh.component.scss'],
})
export class FormDrhComponent {
  user: string;
  role: string;

  constructor(
    private drhsService: DrhsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.user = this.route.snapshot.queryParams['user'];
    this.role = this.route.snapshot.queryParams['role'];
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
