import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';

@Component({
  selector: 'app-category-breadcrumb',
  templateUrl: './category-breadcrumb.component.html',
  styleUrls: [
    './category-breadcrumb.component.scss',
    '../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../assets/css/research/d0672ccc0254cae98d85.css' 
  ]
})
export class CategoryBreadcrumbComponent implements OnInit {
  @Input() country: Country;
  @Input() categoryType: string;
  @Input() categoryName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
