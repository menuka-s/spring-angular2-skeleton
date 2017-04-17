import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  providers: [UserService],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  errorMessage: string;
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
   this.userService.findAllUsers().subscribe((data: Array<User>) => {
     this.users = data;
   });
  }

  addUser(name: string){
    this.userService.createUser(name)
      .subscribe(
        user => this.users.push(user),
        error => this.errorMessage = <any>error
      );
  }

}
