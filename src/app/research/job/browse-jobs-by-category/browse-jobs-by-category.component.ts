import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-browse-jobs-by-category',
  templateUrl: './browse-jobs-by-category.component.html',
  styleUrls: [
    './browse-jobs-by-category.component.scss',
    '../../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../../assets/css/research/d0672ccc0254cae98d85.css' 
  ]
})
export class BrowseJobsByCategoryComponent implements OnInit {
  countryCode: string;
  categories: Category[];
  constructor(private route: ActivatedRoute, private categoryServ: CategoryService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.countryCode = paramMap.get('countryCode');
      this.categoryServ.getAllByCountryCodeAndType(this.countryCode, 'Job').subscribe(
        (categories: Category[]) => {
          this.categories = categories;
        }
      );
    });
  }

}