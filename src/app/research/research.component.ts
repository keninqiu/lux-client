import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: [
    './research.component.scss'
  ]
})
export class ResearchComponent implements OnInit {
  countryCode = 'US';
  constructor() { }

  ngOnInit(): void {
  }

}
