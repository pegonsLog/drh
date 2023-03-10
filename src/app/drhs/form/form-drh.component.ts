import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrhsService } from '../drhs.service';

@Component({
  selector: 'app-form-drh',
  templateUrl: './form-drh.component.html',
  styleUrls: ['./form-drh.component.scss'],
})
export class FormDrhComponent {
  constructor(
    private drhsService: DrhsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit() {}

  voltar() {
    this.router.navigate(['/']);
  }
}
