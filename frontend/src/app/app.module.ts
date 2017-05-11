import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdCheckboxModule, MdSelectModule } from '@angular/material';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersCreateComponent } from './users/users-create.component';

const appRoutes: Routes = [
  { path: 'add', component: UsersCreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdInputModule,
    MdCheckboxModule,
    MdSelectModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
