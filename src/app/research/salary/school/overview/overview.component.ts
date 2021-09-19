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
  isOpen: boolean;
  salaryType: string;
  @Input() school: School;
  constructor() { }

  ngOnInit(): void {
    this.salaryType = this.school.salaryType;
    this.isOpen = false;
  }

  showCompensation() {
    if(this.salaryType == 'Salary') {
      return this.school.compensation.salary.avg;
    }
    return this.school.compensation.hourlyRate.avg;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  changeSalaryType() {
    this.salaryType = (this.salaryType == 'Salary' ? 'Hourly_Rate' : 'Salary');
    this.toggleOpen();
  }
}
