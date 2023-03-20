import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  user: string = '';
  role: string = '';
  name: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.user = this.route.snapshot.queryParams['user'];
    this.role = this.route.snapshot.queryParams['role'];
    this.name = this.route.snapshot.queryParams['name'];
  }

  cancel() {
    this.router.navigate(['/']);
  }

  onTre() {
    this.router.navigate(['/tres/user'], {
      queryParams: {
        user: this.user,
        name: this.name,
      },
    });
  }

  onDrh() {
    this.router.navigate(['/drhs/user'], {
      queryParams: {
        user: this.user,
        name: this.name,
      },
    });
  }
  onUsers() {
    this.router.navigate(['/users']);
  }
}
