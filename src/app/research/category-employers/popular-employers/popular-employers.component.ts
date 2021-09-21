import { Component, Input, OnInit } from '@angular/core';
import { Employer } from 'src/app/interfaces/employer.interface';

@Component({
  selector: 'app-category-popular-employers',
  templateUrl: './popular-employers.component.html',
  styleUrls: [
    './popular-employers.component.scss',
    '../../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../../assets/css/research/d0672ccc0254cae98d85.css' 
  ]
})
export class CateogryPopularEmployersComponent implements OnInit {
  @Input() employers: Employer[];
  @Input() countryCode: string;
  @Input() categoryName: string;
  constructor() { }

  ngOnInit(): void {

  }

  getEmployerPath(employer) {
    return employer.url.replaceAll('=', '%3D').replaceAll('(', '%28').replaceAll(')', '%29');
  }
}
