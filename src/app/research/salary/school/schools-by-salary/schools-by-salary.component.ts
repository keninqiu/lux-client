import { Component, OnInit, Input } from '@angular/core';
import { School } from 'src/app/interfaces/school.interface';

@Component({
  selector: 'app-schools-by-salary',
  templateUrl: './schools-by-salary.component.html',
  styleUrls: [
    './schools-by-salary.component.scss',
    '../../../../../assets/css/salary/a4f25d4089272f5a54e9.css'
  ]
})
export class SchoolsBySalaryComponent implements OnInit {
  @Input() school: School;
  constructor() { }

  ngOnInit(): void {
  }
  getUrl(url) {
    return url.replace('=', '%3D');
  }
}
