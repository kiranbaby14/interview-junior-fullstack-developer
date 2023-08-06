import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/data/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent{

  constructor(public sharedService: SharedService) {}

}
