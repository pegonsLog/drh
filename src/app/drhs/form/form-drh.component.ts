import { Location } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drh } from 'src/app/_shared/models/Drh';
import { DrhsService } from '../drhs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-drh',
  templateUrl: './form-drh.component.html',
  styleUrls: ['./form-drh.component.scss'],
})
export class FormDrhComponent implements OnDestroy {
  role: string;
  user: string;
  name: string;
  subscription: Subscription = new Subscription();
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
    this.user = this.route.snapshot.queryParams['user'];
    this.name = this.route.snapshot.queryParams['name'];
    this.role = this.route.snapshot.queryParams['role'];
    this.drh = this.route.snapshot.data['drh'];
    if (this.user) {
      this.drh.registration = this.route.snapshot.queryParams['user'];
    }
  }

  onSubmit(drh: Drh) {
    if (this.drh.id !== 0) {
      this.update(drh);
    } else {
      this.new(drh);
    }
    this.clear();
  }

  voltar() {
    this.location.back();
  }

  clear() {
    this.drh.period = '';
    this.drh.date = '';
  }

  new(drh: Drh) {
    this.subscription = this.drhsService.save(drh).subscribe(() => {
      if (!this.drh.id) {
        this.location.back();
      }
    });
  }

  update(drh: Drh) {
    this.subscription = this.drhsService.update(drh).subscribe();
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
