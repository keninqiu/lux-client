import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-browse-schools-by-category',
  templateUrl: './browse-schools-by-category.component.html',
  styleUrls: [
    './browse-schools-by-category.component.scss',
    '../../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../../assets/css/research/d0672ccc0254cae98d85.css' 
  ]
})
export class BrowseSchoolsByCategoryComponent implements OnInit {
  @Input() countryCode: string;
  categories: Category[];
  constructor( private categoryServ: CategoryService) { }

  ngOnInit(): void {
      this.categoryServ.getAllByCountryCodeAndType(this.countryCode, 'School').subscribe(
        (categories: Category[]) => {
          this.categories = categories;
        }
      );
  }

}
