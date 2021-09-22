import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-browse-companies-by-industry',
  templateUrl: './browse-companies-by-industry.component.html',
  styleUrls: [
    './browse-companies-by-industry.component.scss',
    '../../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../../assets/css/research/d0672ccc0254cae98d85.css'    
  ]
})
export class BrowseCompaniesByIndustryComponent implements OnInit {
  @Input() countryCode: string;
  categories: Category[];
  constructor(private route: ActivatedRoute, private categoryServ: CategoryService) { }

  ngOnInit(): void {
      this.categoryServ.getAllByCountryCodeAndType(this.countryCode, 'Employer').subscribe(
        (categories: Category[]) => {
          this.categories = categories;
        }
      );
  }

}
