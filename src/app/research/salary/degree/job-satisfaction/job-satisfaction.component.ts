import { Component, Input, OnInit } from '@angular/core';
import { Degree } from 'src/app/interfaces/degree.interface';

@Component({
  selector: 'app-degree-job-satisfaction',
  templateUrl: './job-satisfaction.component.html',
  styleUrls: ['./job-satisfaction.component.scss', 
  '../../../../../assets/css/salary/ed9a8129e06be29a7ddb.css']
})
export class DegreeJobSatisfactionComponent implements OnInit {
  @Input() degree: Degree;
  constructor() { }

  ngOnInit(): void {
  }

}
