import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
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
    this.tre = this.route.snapshot.data['tre'];
    if (this.user) {
      this.tre.registration = this.route.snapshot.queryParams['user'];
    }
  }

  onSubmit(tre: Tre) {
    if (this.tre.id !== 0) {
      this.subscription = this.update(tre).subscribe(arg => {this.location.back()});
    } else {
      this.subscription = this.new(tre).subscribe(arg => {this.location.back()});
    }
    this.clear();
  }

  clear() {
    this.tre.year = '';
    this.tre.date = '';
  }

  voltar() {
    this.location.back();
  }

  new(tre: Tre): Observable<Tre> {
   return this.tresService.save(tre);
  }

  update(tre: Tre): Observable<Tre> {
  return this.tresService.update(tre);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
