import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-category-popular-jobs',
  templateUrl: './popular-jobs.component.html',
  styleUrls: [
    './popular-jobs.component.scss',
    '../../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../../assets/css/research/d0672ccc0254cae98d85.css' 
  ]
})
export class CateogryPopularJobsComponent implements OnInit {
  @Input() jobs: Job[];
  @Input() countryCode: string;
  @Input() categoryName: string;
  constructor() { }

  ngOnInit(): void {

  }

  getJobPath(job) {
    return job.url.replace('=', '%3D').replace('(', '%28').replace(')', '%29');
  }
}
