import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Drh } from 'src/app/shared/model/drh';
import { DrhsService } from '../drhs.service';

@Component({
  selector: 'app-list-drhs',
  templateUrl: './list-drhs.component.html',
  styleUrls: ['./list-drhs.component.scss'],
})
export class ListDrhsComponent {
  list: Drh[] = [];

  displayedColumns: string[] = ['order', 'registration', 'period', 'date'];
  dataSource = this.list;

  subscription = new Subscription();

  constructor(private drhsService: DrhsService) {
    this.drhsService.list().subscribe((drhs: any) => (this.list = drhs));
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
