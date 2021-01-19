import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Question2Service {

  private REST_API = 'https://api.publicapis.org/categories';

  constructor(private httpClient: HttpClient) { }

  getRest_Api(){
    return this.httpClient.get(this.REST_API);
  }
}
