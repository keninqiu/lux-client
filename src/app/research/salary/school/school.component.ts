import { Component, OnInit, Input } from '@angular/core';
import { School } from 'src/app/interfaces/school.interface';

@Component({
  selector: 'app-salary-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  @Input() school: School;
  jobItems: any;
  employerItems: any;
  schoolItems: any;
  constructor() { }

  ngOnInit(): void {
    console.log('school=', this.school);

    const byDimension = this.school.byDimension;
    const related = this.school.related;
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

      if(byDimension.salaryByEmployer && byDimension.salaryByEmployer.length > 0) {
        this.employerItems = byDimension.salaryByEmployer.map(
          (item: any) => {
            return {
              title: item.employer && item.employer.namet ? item.employer.namet.zh : item.name,
              subtitle: '平均年薪',
              content: (item.min && item.max) ? (item.min + '-' + item.max) : item.avg,
              image: '/assets/images/employer-placeholder.png',
              url: item.url
            }
          }
        );
      } else 
      if(byDimension.hourlyRateByEmployer && byDimension.hourlyRateByEmployer.length > 0) {
        this.employerItems = byDimension.hourlyRateByEmployer.map(
          (item: any) => {
            return {
              title: item.employer && item.employer.namet ? item.employer.namet.zh : item.name,
              subtitle: '平均时薪',
              content: (item.min && item.max) ? (item.min + '-' + item.max) : item.avg,
              image: '/assets/images/employer-placeholder.png',
              url: item.url
            }
          }
        );
      } 
      
      if(related && related.length > 0) {
        this.schoolItems = related.map(
          (item: any) => {
            return {
              title: item.school && item.school.namet ? item.school.namet.zh : item.name,
              subtitle: '平均薪酬',
              content: (item.min && item.max) ? (item.min + '-' + item.max) : item.avg,
              image: '/assets/images/school-placeholder.png',
              url: item.url
            }
          }
        );

        console.log('this.schoolItems===', this.schoolItems);
      }
    }
  }

}
