import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private tresService: TresService, private route: ActivatedRoute, private router: Router) {
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

  voltar() {
    this.router.navigate(['/'])
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
