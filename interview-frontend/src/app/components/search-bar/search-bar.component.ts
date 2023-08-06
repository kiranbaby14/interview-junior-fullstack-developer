import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ApiService } from 'src/app/services/api/api.service';
import { SharedService } from 'src/app/services/data/shared.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  private searchValue = '';
  public searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });

  constructor(public apiService: ApiService,
    private sharedService: SharedService,
    private fb: FormBuilder) { }

  public retrieveData() {
    this.apiService.getCityByName(this.searchValue).subscribe((data: any) => {
      this.apiService.cities = data;
      this.apiService.totalLength = this.apiService.cities.length;
      // edge case when data is less than 5 is also habdled defaultly by slice
      this.apiService.pageSlice = this.apiService.cities.slice(0, this.apiService.pageSize);
      this.sharedService.setSharedData(this.apiService.pageSlice)
    })
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    if (this.searchValue !== '') { // edge-case when no value is given and submit button clicked
      this.retrieveData();
    }
  }

}
