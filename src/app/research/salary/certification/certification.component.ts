import { Component, OnInit, Input } from '@angular/core';
import { Certification } from 'src/app/interfaces/certification.interface';

@Component({
  selector: 'app-salary-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {
  @Input() certification: Certification;
  jobItems: any;
  certificationItems: any;
  employerItems: any;
  constructor() { }

  ngOnInit(): void {
    const byDimension = this.certification.byDimension;
    const related = this.certification.related;
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
              title: item.job && item.job.namet ? item.job.namet.zh : item.name,
              subtitle: '平均年薪',
              content: (item.min && item.max) ? (item.min + '-' + item.max) : item.avg,
              url: item.url,
              image: '/assets/images/employer-placeholder.png',
            }
          }
        );
      } else 
      if(byDimension.hourlyRateByEmployer && byDimension.hourlyRateByEmployer.length > 0) {
        this.employerItems = byDimension.hourlyRateByEmployer.map(
          (item: any) => {
            return {
              title: item.job && item.job.namet ? item.job.namet.zh : item.name,
              subtitle: '平均年薪',
              content: (item.min && item.max) ? (item.min + '-' + item.max) : item.avg,
              url: item.url,
              image: '/assets/images/employer-placeholder.png',
            }
          }
        );
      }


      if(related && related.length > 0) {
        this.certificationItems = related.map(
          (item: any) => {
            return {
              title: item.certification && item.certification.namet ? item.certification.namet.zh : item.name,
              content: '平均薪酬：' + (item.min && item.max) ? (item.min + '-' + item.max) : item.avg,
              url: item.url,
            }
          }
        );
      }
      console.log('this.jobItems===', this.jobItems);
    }
  }

}
