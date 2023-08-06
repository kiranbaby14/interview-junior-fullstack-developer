import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  private searchValue = '';
  private searchyFormn = this.fb;

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.retrieveData(this.searchValue);
  }

  public retrieveData(searchValue: String) {
    this.apiService.getCityByName(searchValue).subscribe((data: any) => {
      this.apiService.cities = data;
    })
  }

  // handleClickEvent(event: PageEvent) {

  // }

}
