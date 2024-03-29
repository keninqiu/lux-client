import { Component, Input, OnInit } from '@angular/core';
import { School } from 'src/app/interfaces/school.interface';

@Component({
  selector: 'app-popular-schools',
  templateUrl: './popular-schools.component.html',
  styleUrls: [
    './popular-schools.component.scss',
    '../../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../../assets/css/research/d0672ccc0254cae98d85.css' 
  ]
})
export class PopularSchoolsComponent implements OnInit {
  @Input() schools: School[];
  @Input() countryCode: string;
  @Input() categoryName: string;
  constructor() { }

  ngOnInit(): void {

  }

  getSchoolPath(school) {
    return school.url.replaceAll('=', '%3D').replaceAll('(', '%28').replaceAll(')', '%29');
  }
}
