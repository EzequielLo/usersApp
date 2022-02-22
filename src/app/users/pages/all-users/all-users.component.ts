import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  users!: User[];
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.seeUsers();
  }

  seeUsers() {
    return this.service.getUsers().subscribe((resp) => (this.users = resp));
  }
}
