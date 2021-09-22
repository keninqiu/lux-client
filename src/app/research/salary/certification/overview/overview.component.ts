import { Component, Input, OnInit } from '@angular/core';
import { Certification } from 'src/app/interfaces/certification.interface';

@Component({
  selector: 'app-certification-overview',
  templateUrl: './overview.component.html',
  styleUrls: [
    './overview.component.scss', 
    '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css'
  ]
})
export class CertificationOverviewComponent implements OnInit {
  isOpen: boolean;
  salaryType: string;
  @Input() certification: Certification;
  constructor() { }

  ngOnInit(): void {
    this.salaryType = this.certification.salaryType;
    this.isOpen = false;
  }


  showCompensation() {
    if(!this.certification.compensation) {
      return 0;
    }
    if(this.salaryType == 'Salary') {
      return this.certification.compensation.salary.avg;
    }
    return this.certification.compensation.hourlyRate.avg;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  changeSalaryType() {
    this.salaryType = (this.salaryType == 'Salary' ? 'Hourly_Rate' : 'Salary');
    this.toggleOpen();
  }
}
