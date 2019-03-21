import { UserData } from './../search/interfaces/userData.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.sass']
})
export class DisplayDataComponent implements OnInit {
  @Input() userData: UserData;

  constructor() { }

  ngOnInit() {
  }

}
