import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { Drh } from 'src/app/shared/model/drh';
import { DrhsService } from '../drhs.service';

@Component({
  selector: 'app-list-user-drhs',
  templateUrl: './list-user-drhs.component.html',
  styleUrls: ['./list-user-drhs.component.scss'],
})
export class ListUsersDrhsComponent {
  list: Drh[] = [];
  matricula: string;
  displayedColumns: string[] = ['registration', 'period', 'date'];
  dataSource = this.list;

  subscription = new Subscription();

  constructor(
    private drhsService: DrhsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.matricula = this.route.snapshot.queryParams['user'];

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
    this.router.navigate(['/home']);
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
