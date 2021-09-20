import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-salary-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  @Input() job: Job;
  constructor() { }

  ngOnInit(): void {
  }

}
