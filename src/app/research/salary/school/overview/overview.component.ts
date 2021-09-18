import { Component, Input, OnInit } from '@angular/core';
import { School } from 'src/app/interfaces/school.interface';

@Component({
  selector: 'app-school-overview',
  templateUrl: './overview.component.html',
  styleUrls: [
    './overview.component.scss',
    '../../../../../assets/css/salary/a4f25d4089272f5a54e9.css'
  ]
})
export class SchoolOverviewComponent implements OnInit {
  @Input() school: School;
  constructor() { }

  ngOnInit(): void {
  }

}
