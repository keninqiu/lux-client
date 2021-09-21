import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/interfaces/job.interface';

@Component({
  selector: 'app-what-do',
  templateUrl: './what-do.component.html',
  styleUrls: [
    './what-do.component.scss', 
    '../../../../../assets/css/salary/4866015dcfec8e17e4f5.css', 
    '../../../../../assets/css/research/c6918d55796febf9ef19.css'
  ]
})
export class WhatDoComponent implements OnInit {
  @Input() job: Job;
  constructor() { }

  ngOnInit(): void {
  }

}
