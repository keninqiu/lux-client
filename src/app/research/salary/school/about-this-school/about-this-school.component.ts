import { Component, OnInit, Input } from '@angular/core';
import { School } from 'src/app/interfaces/school.interface';

@Component({
  selector: 'app-about-this-school',
  templateUrl: './about-this-school.component.html',
  styleUrls: [
    './about-this-school.component.scss',
    '../../../../../assets/css/salary/a4f25d4089272f5a54e9.css'
  ]
})
export class AboutThisSchoolComponent implements OnInit {
  @Input() school: School;
  about: any;
  constructor() { }

  ngOnInit(): void {
    this.about = this.school.about;
  }

}
