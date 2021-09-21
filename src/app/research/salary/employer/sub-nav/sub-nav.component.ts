import { Component, Input, OnInit } from '@angular/core';
import { Employer } from 'src/app/interfaces/employer.interface';

@Component({
  selector: 'app-employer-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: [
    './sub-nav.component.scss', 
    '../../../../../assets/css/salary/4866015dcfec8e17e4f5.css', 
    '../../../../../assets/css/research/c6918d55796febf9ef19.css'
  ]
})
export class EmployerSubNavComponent implements OnInit {
  @Input() employer: Employer;
  constructor() { }

  ngOnInit(): void {
  }

}
