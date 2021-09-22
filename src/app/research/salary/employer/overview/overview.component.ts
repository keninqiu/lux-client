import { Component, Input, OnInit } from '@angular/core';
import { Employer } from 'src/app/interfaces/employer.interface';

@Component({
  selector: 'app-employer-overview',
  templateUrl: './overview.component.html',
  styleUrls: [
    './overview.component.scss', 
    '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css'
  ]
})
export class EmployerOverviewComponent implements OnInit {
  isOpen: boolean;
  salaryType: string;
  @Input() employer: Employer;
  constructor() { }

  ngOnInit(): void {
    this.salaryType = this.employer.salaryType;
    this.isOpen = false;
  }


  showCompensation() {
    if(!this.employer.compensation) {
      return 0;
    }
    if(this.salaryType == 'Salary') {
      return this.employer.compensation.salary.avg;
    }
    return this.employer.compensation.hourlyRate.avg;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  changeSalaryType() {
    this.salaryType = (this.salaryType == 'Salary' ? 'Hourly_Rate' : 'Salary');
    this.toggleOpen();
  }
}
