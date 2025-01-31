import { Injectable } from '@angular/core';
import {MatPaginatorIntl} from "@angular/material/paginator";

@Injectable({
  providedIn: 'root'
})
export class PaginatorIntl extends MatPaginatorIntl{

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    return `${page + 1} / ${Math.ceil(length/pageSize)}`
  }

}
