import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-browse-certifications-by-industry',
  templateUrl: './browse-certifications-by-industry.component.html',
  styleUrls: [
    './browse-certifications-by-industry.component.scss',
    '../../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../../assets/css/research/d0672ccc0254cae98d85.css' 
  ]
})
export class BrowseCertificationsByIndustryComponent implements OnInit {
  @Input() countryCode: string;
  categories: Category[];
  constructor(private route: ActivatedRoute, private categoryServ: CategoryService) { }

  ngOnInit(): void {
      this.categoryServ.getAllByCountryCodeAndType(this.countryCode, 'Certification').subscribe(
        (categories: Category[]) => {
          this.categories = categories;
        }
      );
  }

}
