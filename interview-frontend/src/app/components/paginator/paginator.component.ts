import { Component, EventEmitter, OnInit} from '@angular/core';
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
  public cities: any[] = [];
  public currentPage = 0;
  public pageSize = 5;
  public totalLength = 0;
  public pageSlice: any[] = [];

  constructor(private apiService: ApiService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.retrieveData();
  }

  retrieveData(){
    this.apiService.getCities().subscribe((data: any) => {
      this.cities = data;
      this.totalLength = this.cities.length;
      this.pageSlice = this.cities.slice(0, this.pageSize);
      this.sharedService.setSharedData(this.pageSlice)
    })
  }

  handlePageEvent(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if (endIndex > this.totalLength) {
      endIndex = this.totalLength;
    }

    this.pageSlice = this.cities.slice(startIndex, endIndex)
    this.sharedService.setSharedData(this.pageSlice)
  }

}



