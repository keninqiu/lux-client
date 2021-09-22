import { Component, Input, OnInit } from '@angular/core';
import { Employer } from 'src/app/interfaces/employer.interface';

@Component({
  selector: 'app-employer-jobs-by-salary',
  templateUrl: './jobs-by-salary.component.html',
  styleUrls: [
    './jobs-by-salary.component.scss', 
    '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css'
  ]
})
export class EmployerJobsBySalaryComponent implements OnInit {
  @Input() employer: Employer;
  constructor() { }

  ngOnInit(): void {
  }

  getUrl(url: any) {
    return encodeURIComponent(url);
    //return url.replaceAll('=', '%3D').replaceAll('(', '%28').replaceAll(')', '%29').replaceAll('&', '%26');
  }
}
