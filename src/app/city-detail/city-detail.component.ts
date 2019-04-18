import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {

  @Input() info;

  constructor() { }

  ngOnInit() {
  }

}
