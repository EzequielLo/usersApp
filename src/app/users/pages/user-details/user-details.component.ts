import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user!: User;
  constructor(
    private service: DataService,
    private activateRoute: ActivatedRoute
  ) { }
  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.seeDetails(id);
  }
  seeDetails(id: number) {
    return this.service.getUser(id).subscribe((resp) => (this.user = resp));
  }
}
