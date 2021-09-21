import { Component, Input, OnInit } from '@angular/core';
import { Industry } from 'src/app/interfaces/industry.interface';

@Component({
  selector: 'app-industry-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: [
    './sub-nav.component.scss', 
    '../../../../../assets/css/salary/4866015dcfec8e17e4f5.css', 
    '../../../../../assets/css/research/c6918d55796febf9ef19.css'
  ]
})
export class IndustrySubNavComponent implements OnInit {
  @Input() industry: Industry;
  constructor() { }

  ngOnInit(): void {
  }

}
