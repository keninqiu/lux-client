import { Component, Input, OnInit } from '@angular/core';
import { School } from 'src/app/interfaces/school.interface';

@Component({
  selector: 'app-popular-certifications',
  templateUrl: './popular-certifications.component.html',
  styleUrls: [
    './popular-certifications.component.scss',
    '../../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../../assets/css/research/d0672ccc0254cae98d85.css' 
  ]
})
export class CateogryPopularCertificationsComponent implements OnInit {
  @Input() certifications: School[];
  @Input() countryCode: string;
  @Input() categoryName: string;
  constructor() { }

  ngOnInit(): void {

  }

  getCertificationPath(certification) {
    return certification.url.replace('=', '%3D').replace('(', '%28').replace(')', '%29');
  }
}
