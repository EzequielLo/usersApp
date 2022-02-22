import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() users!: User[];
  constructor() { }
  displayedColumns: string[] = ['id', 'username', 'actions'];
  dataSource = this.users;
}
