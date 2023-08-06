import { Component, OnInit} from '@angular/core';
import { MatPaginatorModule, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { PaginatorIntl } from "src/app/services/paginator/PaginatorIntl.service"
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/services/api/api.service';
import { SharedService } from 'src/app/services/data/shared.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  standalone: true,
  imports: [MatPaginatorModule, CommonModule],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntl }]
})

export class PaginatorComponent implements OnInit {



  constructor(public apiService: ApiService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData(){
    this.apiService.getAllCities().subscribe((data: any) => {
      this.apiService.cities = data;
      this.apiService.totalLength = this.apiService.cities.length;
      if (this.apiService.totalLength < this.apiService.pageSize) { // edge case when data is less than 5
        this.apiService.pageSlice = this.apiService.cities.slice(0, this.apiService.totalLength);
      } else {
      this.apiService.pageSlice = this.apiService.cities.slice(0, this.apiService.pageSize);
      }
      this.sharedService.setSharedData(this.apiService.pageSlice)
    })
  }

  handlePageEvent(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if (endIndex > this.apiService.totalLength) {
      endIndex = this.apiService.totalLength;
    }

    this.apiService.pageSlice = this.apiService.cities.slice(startIndex, endIndex)
    this.sharedService.setSharedData(this.apiService.pageSlice)
  }

}



