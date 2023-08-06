import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "http://localhost:3000/api/city/all";

  constructor(private http: HttpClient) { }

  public getCities(): Observable<any> {
    return this.http.get(this.url);
  }

}
