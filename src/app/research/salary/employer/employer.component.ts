import { Component, Input, OnInit } from '@angular/core';
import { Employer } from 'src/app/interfaces/employer.interface';

@Component({
  selector: 'app-salary-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  @Input() employer: Employer;
  constructor() { }

  ngOnInit(): void {
    console.log('this.employer==', this.employer);
  }


}
