import { Component } from '@angular/core';
import { UsersService } from '@services/users.service';
import { Router } from '@angular/router';
import { User } from '@models/users.model';

@Component({
  selector: 'lc-users',
  styleUrls: ['./users.component.scss'],
  templateUrl: './users.component.html',
})
export class UsersComponent {

  users: User[];

  constructor(private service: UsersService, private router: Router) {
    this.service.getUsers().then((users: User[]) => {
      this.users = users;
    });
  }

  createUser = () => {
    this.router.navigate(['/create']);
  }

}
