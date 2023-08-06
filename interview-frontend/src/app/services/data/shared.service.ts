import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private sharedData: any[] = [];

  constructor() { }

  public setSharedData(data: any[]) {
    this.sharedData = data;
  }

  public getSharedData(){
    return this.sharedData;
  }

}
