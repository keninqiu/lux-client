import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-job-satisfaction',
  templateUrl: './job-satisfaction.component.html',
  styleUrls: [
    './job-satisfaction.component.scss', 
    '../../../../../assets/css/salary/4866015dcfec8e17e4f5.css', 
    '../../../../../assets/css/research/c6918d55796febf9ef19.css'
  ]
})
export class JobSatisfactionComponent implements OnInit {
  @Input() job: Job;
  byDimension: any;
  healthBenefitTotal: number;
  genderTotal: number;

  constructor() { }

  ngOnInit(): void {
    this.byDimension = this.job.byDimension;
  }

  getHealthBenefitPercentage(level: string) {
    
    if(!this.byDimension || !this.byDimension.healthBenefit) {
      return 0;
    }

    const total = this.getHealthBenefitTotal();
    return (this.byDimension.healthBenefit[level].profileCount * 100 / total).toFixed(1);
  }

  getHealthBenefitTotal() {
    if(!this.byDimension || !this.byDimension.healthBenefit) {
      return 0;
    }
    if(this.healthBenefitTotal) {
      return this.healthBenefitTotal;
    }
    
    const total = 
    (this.byDimension.healthBenefit.dental ? this.byDimension.healthBenefit.dental.profileCount : 0)
    + (this.byDimension.healthBenefit.medical ? this.byDimension.healthBenefit.medical.profileCount : 0)
    + (this.byDimension.healthBenefit.none ? this.byDimension.healthBenefit.none.profileCount : 0)
    + (this.byDimension.healthBenefit.vision ? this.byDimension.healthBenefit.vision.profileCount : 0);
    if(!total) {
      return 0;
    }
    this.healthBenefitTotal = total;
    return total; 
  }

  getGenderPercentage(level: string) {
    this.byDimension = this.job.byDimension;
    
    if(!this.byDimension || !this.byDimension.gender) {
      return 0;
    }
    const total = this.getGenderTotal();
    if(!total) {
      return 0;
    }
    return (this.byDimension.gender[level].profileCount * 100 / total).toFixed(1);
  }

  getGenderTotal() {
    if(!this.byDimension || !this.byDimension.gender) {
      return 0;
    }
    if(this.genderTotal) {
      return this.genderTotal;
    }
    
    const total = 
    (this.byDimension.gender.male ? this.byDimension.gender.male.profileCount : 0)
    + (this.byDimension.gender.female ? this.byDimension.gender.female.profileCount : 0);
    return total;
  }

}
