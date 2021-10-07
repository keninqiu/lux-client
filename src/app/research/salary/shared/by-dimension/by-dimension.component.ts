import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-shared-by-dimension',
  templateUrl: './by-dimension.component.html',
  styleUrls: [
    './by-dimension.component.scss', 
    '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css'
  ]
})
export class SharedByDimensionComponent implements OnInit {
  @Input() entity: any;
  byDimension: any;
  experienceTotal: number;
  genderTotal: number;
  constructor() { }

  ngOnInit(): void {
    this.byDimension = this.entity.byDimension;
  }

  getExperiencePercentage(level: string) {
    
    if(!this.byDimension || !this.byDimension.experience) {
      return 0;
    }

    const total = this.getExperienceTotal();
    if(total == 0) {
      return 0;
    }
    return (this.byDimension.experience[level].profileCount * 100 / total).toFixed(1);
  }

  getExperienceTotal() {

    if(!this.byDimension || !this.byDimension.experience) {
      return 0;
    }
    if(this.experienceTotal) {
      return this.experienceTotal;
    }
    
    const total = 
    (this.byDimension.experience.earlyCareer ? this.byDimension.experience.earlyCareer.profileCount : 0)
    + (this.byDimension.experience.entryLevel ? this.byDimension.experience.entryLevel.profileCount : 0)
    + (this.byDimension.experience.experienced ? this.byDimension.experience.experienced.profileCount : 0)
    + (this.byDimension.experience.lateCareer ? this.byDimension.experience.lateCareer.profileCount : 0)
    + (this.byDimension.experience.midCareer ? this.byDimension.experience.midCareer.profileCount : 0);
    if(!total) {
      return 0;
    }
    this.experienceTotal = total;
    return total; 
  }

  getGenderPercentage(level: string) {
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
