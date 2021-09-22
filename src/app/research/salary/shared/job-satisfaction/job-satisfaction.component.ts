import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-job-satisfaction',
  templateUrl: './job-satisfaction.component.html',
  styleUrls: ['./job-satisfaction.component.scss', 
  '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css']
})
export class SharedJobSatisfactionComponent implements OnInit {
  @Input() entity: any;
  constructor() { }

  ngOnInit(): void {
  }

}
