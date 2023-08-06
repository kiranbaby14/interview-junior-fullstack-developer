import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "http://localhost:3000/api/city";
  public cities: any[] = [];
  public currentPage = 0;
  public pageSize = 5;
  public totalLength = 0;
  public pageSlice: any[] = [];

  constructor(private http: HttpClient) { }

  public getAllCities(): Observable<any> {
    return this.http.get(`${this.url}/all`);
  }

  public getCityByName(searchName: String) {
    return this.http.get(`${this.url}/search/${searchName}`);
  }

}
