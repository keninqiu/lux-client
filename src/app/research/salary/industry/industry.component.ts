import { Component, OnInit, Input } from '@angular/core';
import { Industry } from 'src/app/interfaces/industry.interface';

@Component({
  selector: 'app-salary-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {
  @Input() industry: Industry;
  constructor() { }

  ngOnInit(): void {
  }

}
