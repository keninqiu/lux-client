import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.interface';

@Component({
  selector: 'app-salary-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill;
  jobItems: any;
  constructor() { }

  ngOnInit(): void {
    const byDimension = this.skill.byDimension;
    const related = this.skill.related;
    if(byDimension) {
      if(byDimension.salaryByJob && byDimension.salaryByJob.length > 0) {
        this.jobItems = byDimension.salaryByJob.map(
          (item: any) => {
            return {
              title: item.job && item.job.namet ? item.job.namet.zh : item.name,
              min: item.min,
              max: item.max,
              avg: item.avg,
              url: item.url
            }
          }
        );
      } else 
      if(byDimension.hourlyRateByJob && byDimension.hourlyRateByJob.length > 0) {
        this.jobItems = byDimension.hourlyRateByJob.map(
          (item: any) => {
            return {
              title: item.job && item.job.namet ? item.job.namet.zh : item.name,
              min: item.min,
              max: item.max,
              avg: item.avg,
              url: item.url
            }
          }
        );
      }

    }
  }

}
