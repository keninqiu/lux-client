import { Component, Input, OnInit } from '@angular/core';
import { Degree } from 'src/app/interfaces/degree.interface';

@Component({
  selector: 'app-salary-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss']
})
export class DegreeComponent implements OnInit {
  @Input() degree: Degree;
  constructor() { }

  ngOnInit(): void {
    console.log('degree=', this.degree);
  }

}
