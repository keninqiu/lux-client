import { Component, Input, OnInit } from '@angular/core';
import { Degree } from 'src/app/interfaces/degree.interface';

@Component({
  selector: 'app-degree-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: [
    './sub-nav.component.scss', 
    '../../../../../assets/css/salary/4866015dcfec8e17e4f5.css', 
    '../../../../../assets/css/research/c6918d55796febf9ef19.css'
  ]
})
export class DegreeSubNavComponent implements OnInit {
  @Input() degree: Degree;
  constructor() { }

  ngOnInit(): void {
  }

}
