import { Component, OnInit, Input } from '@angular/core';
import { School } from 'src/app/interfaces/school.interface';

@Component({
  selector: 'app-jobs-by-salary',
  templateUrl: './jobs-by-salary.component.html',
  styleUrls: [
    './jobs-by-salary.component.scss',
    '../../../../../assets/css/salary/a4f25d4089272f5a54e9.css'
  ]
})
export class JobsBySalaryComponent implements OnInit {
  @Input() school: School;
  constructor() { }

  ngOnInit(): void {
  }

}
