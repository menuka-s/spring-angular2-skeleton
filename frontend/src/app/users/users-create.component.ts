import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Picklist } from '../picklist/picklist.model';
import { PicklistService } from '../picklist/picklist.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-users-create',
  providers: [UserService, PicklistService],
  templateUrl: './users-create.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersCreateComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  errorMessage: string;
  users: User[];
  picklist: Picklist[];

  constructor(private userService: UserService, private picklistService: PicklistService, private _fb: FormBuilder, private route: Router) {
  }

  ngOnInit(): void {
   this.userService.findAllUsers().subscribe((data: Array<User>) => {
     this.users = data;
   });
   this.picklistService.findAllPicklists().subscribe((data: Array<Picklist>) => {
    this.picklist = data
   });
   this.myForm = this._fb.group({
    name: [''],
    isTrue:[''],
    someNumber:[''],
    testSelect:['']
   })

   this.subscribeToFormChanges();

  }

  subscribeToFormChanges() {
    const myFormStatusChanges$ = this.myForm.statusChanges;
    const myFormValueChanges$ = this.myForm.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }

  addUser(myObj: string){

    this.userService.createUser(myObj)
      .subscribe(
        user => this.users.push(user),
        error => this.errorMessage = <any>error
      );
  }

  testFunction(data: any){

  }

}
