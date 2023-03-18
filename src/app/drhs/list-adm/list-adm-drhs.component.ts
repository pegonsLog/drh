import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { Drh } from 'src/app/shared/model/drh';
import { DrhsService } from '../drhs.service';

@Component({
  selector: 'app-list-adm-drhs',
  templateUrl: './list-adm-drhs.component.html',
  styleUrls: ['./list-adm-drhs.component.scss'],
})
export class ListAdmDrhsComponent {
  list: Drh[] = [];
  drh: Drh = {
    id: 0,
    registration: '',
    period: '',
    date: ''
  }
  matricula: string;
  role: string;
  displayedColumns: string[] = ['registration', 'period', 'date', 'actions'];
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
      .listDrh()
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

  onSave() {
    this.router.navigate(['drhs/new'], {
      queryParams: { role: this.role, user: this.matricula },
    });
  }

  onUsers() {
    this.router.navigate(['/users']);
  }

  edit(id: number) {
   this.router.navigate(['/drhs/edit', id]);
  }
  delete() {
    console.log('Delete');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
