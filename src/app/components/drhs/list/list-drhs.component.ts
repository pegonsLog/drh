import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { Drh } from 'src/app/shared/model/drh';
import { DrhsService } from '../drhs.service';

@Component({
  selector: 'app-list-drhs',
  templateUrl: './list-drhs.component.html',
  styleUrls: ['./list-drhs.component.scss'],
})
export class ListDrhsComponent {
  list: Drh[] = [];
  matricula: string;
  role: string;
  displayedColumns: string[] = ['order', 'registration', 'period', 'date'];
  dataSource = this.list;

  subscription = new Subscription();

  constructor(
    private drhsService: DrhsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.matricula = this.route.snapshot.queryParams['user'];
    this.role = this.route.snapshot.queryParams['role'];

    this.subscription = this.drhsService
      .list()
      .pipe(
        map((drhs: Drh[]) =>
          drhs.filter((drh: any) => drh.registration === this.matricula)
        )
      )
      .subscribe((drhs: any) => (this.list = drhs));
  }
  voltar() {
    this.router.navigate(['/']);
  }

  onSave(matricula: string) {
    this.router.navigate(['drhs/new']);
  }

  onUsers() {
    this.router.navigate(['users/']);
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
