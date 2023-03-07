import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tre } from 'src/app/shared/model/tre';
import { TresService } from '../tres.service';

@Component({
  selector: 'app-list-tres',
  templateUrl: './list-tres.component.html',
  styleUrls: ['./list-tres.component.scss']
})
export class ListTresComponent {

  list: Tre[] = [];

  displayedColumns: string[] = ['order', 'registration', 'year', 'date'];
  dataSource = this.list;

  subscription = new Subscription();

  constructor(private tresService: TresService) {
    this.tresService.list().subscribe((tres: any) => (this.list = tres));
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
