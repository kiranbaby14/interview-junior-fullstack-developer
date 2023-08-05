import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public getJsonValue: any;
  public postJsonValue: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMethod();
    this.postMethod();
  }

  public getMethod(){
    this.http.get(" http://localhost:3000/api/city/all").subscribe((data) => {
      this.getJsonValue = data;
    });
  }

  public postMethod(){

    let body = {}

    this.http.post("http://localhost:8000/items", body).subscribe((data) => {
      this.postJsonValue = data;
    });
  }
}
