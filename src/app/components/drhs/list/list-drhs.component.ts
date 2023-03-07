import { Component } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { Drh } from 'src/app/shared/model/drh';
import { DrhsService } from '../drhs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-list-drhs',
  templateUrl: './list-drhs.component.html',
  styleUrls: ['./list-drhs.component.scss'],
})
export class ListDrhsComponent {
  list: Drh[] = [];

  matricula: string;

  displayedColumns: string[] = ['order', 'registration', 'period', 'date'];
  dataSource = this.list;

  subscription = new Subscription();

  constructor(private drhsService: DrhsService, private route: ActivatedRoute) {
    this.matricula = this.route.snapshot.queryParams['user'];

    this.drhsService
      .list()
      .pipe(
        map((drhs: Drh[]) =>
          drhs.filter((drh: any) => drh.registration === this.matricula)
        )
      )
      .subscribe((drhs: any) => (this.list = drhs));
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
