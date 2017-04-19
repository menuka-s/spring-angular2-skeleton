import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Picklist } from './picklist.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class PicklistService {

  constructor(private http: Http) {
  }

  findAllPicklists(): Observable<Array<Picklist>> {
    return this.http.get('/api/picklists')
      .map((response: Response) => response.json())
      .map((data: any) => {
        return data._embedded.picklists as Picklist[];
      });
  }
}
