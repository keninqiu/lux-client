import { Component, Input, OnInit } from '@angular/core';
import { Industry } from 'src/app/interfaces/industry.interface';

@Component({
  selector: 'app-category-popular-industries',
  templateUrl: './popular-industries.component.html',
  styleUrls: [
    './popular-industries.component.scss',
    '../../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../../assets/css/research/d0672ccc0254cae98d85.css' 
  ]
})
export class CateogryPopularIndustriesComponent implements OnInit {
  @Input() industries: Industry[];
  @Input() countryCode: string;
  @Input() categoryName: string;
  constructor() { }

  ngOnInit(): void {

  }

  getIndustryPath(industry) {
    return industry.url.replace('=', '%3D').replace('(', '%28').replace(')', '%29');
  }
}
