import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{

  public getJsonValue: any;
  public postJsonValue: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getMethod();
    // this.postMethod();
  }

  public getMethod(){
    this.apiService.getCities().subscribe((data) => {
      this.getJsonValue = data;
    })
  }

  // public postMethod(){

  //   let body = {}

  //   this.http.post("http://localhost:8000/items", body).subscribe((data) => {
  //     this.postJsonValue = data;
  //   });
  // }
}
