import { Component } from '@angular/core';
import { UsersService } from '@services/users.service';
import { User } from '@models/users.model';
import { NotificationService } from '@services/notification.service';

@Component({
  selector: 'create-user',
  styleUrls: ['./create-user.component.scss'],
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent {

  user: User;

  constructor(private service: UsersService, private notificationService: NotificationService) {
    this.user = new User();
    this.user.firstName = 'asdsadasd';
    this.user.lastName = 'asdsadasd';
    this.user.email = 'asdsadasd@sdafsdf.com';
    this.user.age = '24';
    this.user.phone = '45345345345345';
    this.user.role = 'admin';
    this.user.password = '123456';
  }

  addUser = () => {
    this.service.register(this.user)
    .then((user: User) => {
        this.notificationService.showNotification('success', 'Create user', `User ${this.user.firstName} ${this.user.lastName} was created`);
    })
    .catch((error) => {
      this.notificationService.showNotification('error', 'Create user', `Error creating user ${this.user.firstName} ${this.user.lastName}, please try again later!`);
    });
  }

}
