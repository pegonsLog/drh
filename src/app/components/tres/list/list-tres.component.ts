import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { Tre } from 'src/app/shared/model/tre';
import { TresService } from '../tres.service';

@Component({
  selector: 'app-list-tres',
  templateUrl: './list-tres.component.html',
  styleUrls: ['./list-tres.component.scss']
})
export class ListTresComponent {

  list: Tre[] = [];

  matricula: string;

  displayedColumns: string[] = ['order', 'registration', 'year', 'date'];
  dataSource = this.list;

  subscription = new Subscription();

  constructor(private tresService: TresService, private route: ActivatedRoute) {
    this.matricula = this.route.snapshot.queryParams['user'];

    this.tresService
      .list()
      .pipe(
        map((drhs: Tre[]) =>
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
