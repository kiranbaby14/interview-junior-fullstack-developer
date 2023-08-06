import { Component } from '@angular/core';
import { MatPaginatorModule, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import {PaginatorIntl} from "../../../services/paginator/PaginatorIntl.service"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  standalone: true,
  imports: [MatPaginatorModule, CommonModule],
  providers: [{provide: MatPaginatorIntl, useClass: PaginatorIntl}]
})

export class PaginatorComponent {
  currentPage = 0

  handlePageEvent(pageEvent: PageEvent) {
    // console.log("skfb", pageEvent)
  }
}

