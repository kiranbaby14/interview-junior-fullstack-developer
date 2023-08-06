import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sharedData: any[] = [];

  constructor() { }

  public setSharedData(data: any[]) {
    console.log("d", data)
    this.sharedData = data;
  }

  public getSharedData(){
    return this.sharedData;
  }

}
