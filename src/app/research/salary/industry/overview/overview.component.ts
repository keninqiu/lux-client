import { Component, Input, OnInit } from '@angular/core';
import { Industry } from 'src/app/interfaces/industry.interface';

@Component({
  selector: 'app-industry-overview',
  templateUrl: './overview.component.html',
  styleUrls: [
    './overview.component.scss', 
    '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css'
  ]
})
export class IndustryOverviewComponent implements OnInit {
  isOpen: boolean;
  salaryType: string;
  @Input() industry: Industry;
  constructor() { }

  ngOnInit(): void {
    this.salaryType = this.industry.salaryType;
    this.isOpen = false;
  }


  showCompensation() {
    if(!this.industry.compensation) {
      return 0;
    }
    if(this.salaryType == 'Salary') {
      return this.industry.compensation.salary.avg;
    }
    return this.industry.compensation.hourlyRate.avg;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  changeSalaryType() {
    this.salaryType = (this.salaryType == 'Salary' ? 'Hourly_Rate' : 'Salary');
    this.toggleOpen();
  }
}
