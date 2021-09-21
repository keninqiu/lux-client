import { Component, Input, OnInit } from '@angular/core';
import { Degree } from 'src/app/interfaces/degree.interface';

@Component({
  selector: 'app-category-popular-degrees',
  templateUrl: './popular-degrees.component.html',
  styleUrls: [
    './popular-degrees.component.scss',
    '../../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../../assets/css/research/d0672ccc0254cae98d85.css' 
  ]
})
export class CateogryPopularDegreesComponent implements OnInit {
  @Input() degrees: Degree[];
  @Input() countryCode: string;
  @Input() categoryName: string;
  constructor() { }

  ngOnInit(): void {

  }

  getDegreePath(degree) {
    return degree.url.replaceAll('=', '%3D').replaceAll('(', '%28').replaceAll(')', '%29');
  }
}
