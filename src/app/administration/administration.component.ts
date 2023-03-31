import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent {
  user: string = '';
  role: string = '';
  name: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.role = this.route.snapshot.queryParams['role'];
    this.name = this.route.snapshot.queryParams['name'];
  }

  cancel() {
    this.router.navigate(['/']);
  }

  onTre() {
    this.router.navigate(['/tres/adm5Ft76#$78&8uio&8#80976'], {
      queryParams: {
        user: this.user,
        name: this.name,
        role: this.role
      },
    });
  }

  onDrh() {
    this.router.navigate(['/drhs/adm5Ft76#$78&8uio&8#33356'], {
      queryParams: {
        user: this.user,
        name: this.name,
        role: this.role
      },
    });
  }

  onUsers() {
    this.router.navigate(['/users/list9dkj%&kkh7898&8jjj$5']);
  }
}
