import { Component, Input, OnInit } from '@angular/core';
import { Degree } from 'src/app/interfaces/degree.interface';

@Component({
  selector: 'app-degree-overview',
  templateUrl: './overview.component.html',
  styleUrls: [
    './overview.component.scss', 
    '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css'
  ]
})
export class DegreeOverviewComponent implements OnInit {
  isOpen: boolean;
  salaryType: string;
  @Input() degree: Degree;
  constructor() { }

  ngOnInit(): void {
    this.salaryType = this.degree.salaryType;
    this.isOpen = false;
  }


  showCompensation() {
    if(!this.degree.compensation) {
      return 0;
    }
    if(this.salaryType == 'Salary') {
      return this.degree.compensation.salary.avg;
    }
    return this.degree.compensation.hourlyRate.avg;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  changeSalaryType() {
    this.salaryType = (this.salaryType == 'Salary' ? 'Hourly_Rate' : 'Salary');
    this.toggleOpen();
  }
}
