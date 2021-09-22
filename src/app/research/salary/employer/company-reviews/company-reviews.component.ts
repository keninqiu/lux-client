import { Component, OnInit, Input } from '@angular/core';
import { Employer } from 'src/app/interfaces/employer.interface';

@Component({
  selector: 'app-employer-company-reviews',
  templateUrl: './company-reviews.component.html',
  styleUrls: [
    './company-reviews.component.scss', 
    '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css'
  ]
})
export class EmployerCompanyReviewsComponent implements OnInit {
  @Input() employer: Employer;
  constructor() { }

  ngOnInit(): void {
  }

}
