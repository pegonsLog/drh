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

  constructor(private router: Router, private route: ActivatedRoute) {
    this.user = this.route.snapshot.queryParams['user'];
    this.role = this.route.snapshot.queryParams['role'];
    this.name = this.route.snapshot.queryParams['name'];
  }

  cancel() {
    this.router.navigate(['/']);
  }

  onTre() {
    if (this.role === 'user') {
      this.router.navigate(['/tres/user'], {
        queryParams: {
          user: this.user,
        },
      });
    } else {
      this.router.navigate(['/tres/adm'], {
        queryParams: {
          user: this.user,
        },
      });
    }
  }
  onDrh() {
    if (this.role === 'user') {
      this.router.navigate(['/drhs/user'], {
        queryParams: {
          user: this.user,
        },
      });
    } else {
      this.router.navigate(['/drhs/adm'], {
        queryParams: {
          user: this.user,
        },
      });
    }
  }
}
