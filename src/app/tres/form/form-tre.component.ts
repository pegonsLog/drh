import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tre } from 'src/app/_shared/models/Tre';
import { TresService } from '../tres.service';

@Component({
  selector: 'app-form-tre',
  templateUrl: './form-tre.component.html',
  styleUrls: ['./form-tre.component.scss'],
})
export class FormTreComponent implements OnDestroy {
  role: string;
  user: string;
  name: string;
  subscription: Subscription = new Subscription();

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
    this.user = this.route.snapshot.queryParams['user'];
    this.name = this.route.snapshot.queryParams['name'];
    this.role = this.route.snapshot.queryParams['role'];
    if (this.user) {
      this.tre.registration = this.route.snapshot.queryParams['user'];
    }
  }

  onSubmit(tre: Tre) {
    this.subscription = this.tresService.save(tre).subscribe(() => {
      this.router.navigate(['/tres/adm5Ft76#$78&8uio&8)#80976'], {
        queryParams: {
          user: this.user,
          name: this.name,
          role: this.role,
        },
      });
    });
    alert('Tre incluído com sucesso!');
    this.clear();
  }

  clear() {
    this.tre.year = '';
    this.tre.date = '';
  }

  voltar() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
