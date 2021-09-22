import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.interface';

@Component({
  selector: 'app-skill-overview',
  templateUrl: './overview.component.html',
  styleUrls: [
    './overview.component.scss', 
    '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css'
  ]
})
export class SkillOverviewComponent implements OnInit {
  isOpen: boolean;
  salaryType: string;
  @Input() skill: Skill;
  constructor() { }

  ngOnInit(): void {
    this.salaryType = this.skill.salaryType;
    this.isOpen = false;
  }


  showCompensation() {
    if(!this.skill.compensation) {
      return 0;
    }
    if(this.salaryType == 'Salary') {
      return this.skill.compensation.salary.avg;
    }
    return this.skill.compensation.hourlyRate.avg;
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  changeSalaryType() {
    this.salaryType = (this.salaryType == 'Salary' ? 'Hourly_Rate' : 'Salary');
    this.toggleOpen();
  }
}
