import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { User } from './user.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  findAllUsers(): Observable<Array<User>> {
    return this.http.get('/api/users')
      .map((response: Response) => response.json())
      .map((data: any) => {
        return data._embedded.users as User[];
      });
  }

  createUser(name: string): Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('/api/users', { name }, options)
      .map(this.extractData);
  }

  private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
    }
}
