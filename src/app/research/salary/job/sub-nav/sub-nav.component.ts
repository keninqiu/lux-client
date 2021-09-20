import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-job-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: [
    './sub-nav.component.scss', 
    '../../../../../assets/css/salary/4866015dcfec8e17e4f5.css', 
    '../../../../../assets/css/research/c6918d55796febf9ef19.css'
  ]
})
export class JobSubNavComponent implements OnInit {
  @Input() job: Job;
  constructor() { }

  ngOnInit(): void {
  }

}
