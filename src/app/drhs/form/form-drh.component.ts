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
    this.clear();
    if (this.drh.id !== 0) {
      this.update(drh);
      alert('Drh alterado com sucesso!');
    } else {
      this.new(drh);
      alert('Drh incluído com sucesso!');
    }
  }

  voltar() {
    this.location.back();
  }

  clear() {
    this.drh.period = '';
    this.drh.date = '';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  new(drh: Drh) {
    this.subscription = this.drhsService.save(drh).subscribe(() => {
      if (!this.drh.id) {
        this.router.navigate(['/drhs/adm5Ft76#$78&8uio&8)#33356'], {
          queryParams: {
            user: this.user,
            name: this.name,
            role: this.role,
          },
        });
      }
    });
  }

  update(drh: Drh) {
    this.subscription = this.drhsService.update(drh).subscribe(() => {
      if (this.drh.id) {
        this.router.navigate(['/drhs/adm5Ft76#$78&8uio&8)#33356'], {
          queryParams: {
            user: this.user,
            name: this.name,
            role: this.role,
          },
        });
      }
    });
  }
}
