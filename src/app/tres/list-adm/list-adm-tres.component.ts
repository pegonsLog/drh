import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { Tre } from 'src/app/shared/model/tre';
import { TresService } from '../tres.service';

@Component({
  selector: 'app-list-adm-tres',
  templateUrl: './list-adm-tres.component.html',
  styleUrls: ['./list-adm-tres.component.scss']
})
export class ListAdmTresComponent {

  list: Tre[] = [];

  matricula: string;
  role: string;

  displayedColumns: string[] = ['registration', 'year', 'date', 'actions'];
  dataSource = this.list;

  subscription = new Subscription();

  constructor(private tresService: TresService, private route: ActivatedRoute, private router: Router) {
    this.matricula = this.route.snapshot.queryParams['user'];
    this.role = this.route.snapshot.queryParams['role'];

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

  onSave(matricula: string) {
    this.router.navigate(['tres/new']);
  }

  onUsers() {
    this.router.navigate(['users/']);
  }

  edit() {
    console.log('Edit');
  }
  delete() {
    console.log('Delete');
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}

