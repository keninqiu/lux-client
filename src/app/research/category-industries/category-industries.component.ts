import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/country.interface';
import { Industry } from 'src/app/interfaces/industry.interface';
import { CategoryService } from 'src/app/services/category.service';
import { CountryService } from 'src/app/services/country.service';
import { IndustryService } from 'src/app/services/industry.service';
import { Category } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-category-industries',
  templateUrl: './category-industries.component.html',
  styleUrls: ['./category-industries.component.scss']
})
export class CategoryIndustriesComponent implements OnInit {
  countryCode: string;
  categorySlug: string;
  categoryName: string;
  country: Country;
  industries: Industry[];
  constructor(
    private route: ActivatedRoute, 
    private industryServ: IndustryService,
    private countryServ: CountryService,
    private categoryServ: CategoryService
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      this.countryCode = paramMap.get('countryCode');
      this.categorySlug = paramMap.get('categorySlug');
      this.categoryServ.getByCountryCodeTypeAndSlug(this.countryCode, 'Industry', this.categorySlug).subscribe(
        (category: Category) => {
          if(category) {
            this.categoryName = category.namet ? category.namet.zh : category.name;
            if(category.country) {
              this.country = category.country;
            }
          }
        }
      );

      this.industryServ.getAllByCountryCodeAndCategorySlug(this.countryCode, this.categorySlug).subscribe(
        (industries: Industry[]) => {
          this.industries = industries;
          console.log('industries=', industries);
        }
      );

    });
  }

}
