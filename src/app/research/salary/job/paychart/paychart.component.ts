import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-paychart',
  templateUrl: './paychart.component.html',
  styleUrls: [
    './paychart.component.scss', 
    '../../../../../assets/css/salary/4866015dcfec8e17e4f5.css', 
    '../../../../../assets/css/research/c6918d55796febf9ef19.css'
  ]
})
export class PaychartComponent implements OnInit {
  isOpen: boolean;
  salaryType: string;
  @Input() job: Job;
  constructor() { }

  ngOnInit(): void {
    this.salaryType = this.job.salaryType;
    this.isOpen = false;
  }

  showCompensation() {
    if(!this.job.compensation) {
      return 0;
    }
    if(this.salaryType == 'Salary') {
      return this.job.compensation.salary.avg;
    }
    return this.job.compensation.hourlyRate.avg;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  changeSalaryType() {
    this.salaryType = (this.salaryType == 'Salary' ? 'Hourly_Rate' : 'Salary');
    this.toggleOpen();
  }

  getCompensation(type: string) {
    if(this.salaryType == 'Salary') {
      return this.job.compensation.salary[type];
    }
    return this.job.compensation.hourlyRate[type];
  }

  getOtherCompensation(compensationType: string, type: string) {
    return this.job.compensation[compensationType][type];
  }







}
