import { Component, OnInit, Input } from '@angular/core';
import { School } from 'src/app/interfaces/school.interface';

@Component({
  selector: 'app-salary-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  @Input() school: School;
  constructor() { }

  ngOnInit(): void {
    console.log('school=', this.school);
  }

}
