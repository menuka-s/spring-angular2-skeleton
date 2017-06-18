import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

import { Picklist } from '../picklist/picklist.model';
import { PicklistService } from '../picklist/picklist.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  providers: [UserService, PicklistService],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  errorMessage: string;
  users: User[];
  picklist: Picklist[];

  constructor(private userService: UserService, private picklistService: PicklistService, private router: Router) {
  }

  ngOnInit(): void {
    debugger
   this.userService.findAllUsers().subscribe((data: Array<User>) => {
     this.users = data;
   });
   this.picklistService.findAllPicklists().subscribe((data: Array<Picklist>) => {
    this.picklist = data
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
