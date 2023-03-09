import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DrhsService } from '../../drhs/drhs.service';
import { TresService } from '../tres.service';

@Component({
  selector: 'app-form-tre',
  templateUrl: './form-tre.component.html',
  styleUrls: ['./form-tre.component.scss']
})
export class FormTreComponent {

  constructor(
    private tresService: TresService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit() {}

  voltar() {
    this.router.navigate(['/']);
  }

}
