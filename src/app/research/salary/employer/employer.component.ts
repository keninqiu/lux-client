import { Component, Input, OnInit } from '@angular/core';
import { Employer } from 'src/app/interfaces/employer.interface';

@Component({
  selector: 'app-salary-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  @Input() employer: Employer;
  jobItems: any;
  degreeItems: any;
  employerItems: any;
  constructor() { }

  ngOnInit(): void {
    console.log('this.employer==', this.employer);

    const byDimension = this.employer.byDimension;
    const related = this.employer.related;
    if(byDimension) {
      console.log('haha');
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



      if(byDimension.salaryByDegree && byDimension.salaryByDegree.length > 0) {
        this.degreeItems = byDimension.salaryByDegree.map(
          (item: any) => {
            return {
              title: item.degree && item.degree.namet ? item.degree.namet.zh : item.name,
              content: '平均年薪：' + (item.min && item.max) ? (item.min + '-' + item.max) : item.avg,
              url: item.url
            }
          }
        )
      } else 
      if(byDimension.hourlyRateByDegree && byDimension.hourlyRateByDegree.length > 0) {
        this.degreeItems = byDimension.hourlyRateByDegree.map(
          (item: any) => {
            return {
              title: item.degree && item.degree.namet ? item.degree.namet.zh : item.name,
              content: '平均时薪：' + (item.min && item.max) ? (item.min + '-' + item.max) : item.avg,
              url: item.url
            }
          }
        )
      }


      if(this.employer.related && this.employer.related.length > 0) {
        this.employerItems = this.employer.related.map(
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
      }
    }
  }


}
