import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/country.interface';
import { Employer } from 'src/app/interfaces/employer.interface';
import { Category } from 'src/app/interfaces/category.interface';
import { CategoryService } from 'src/app/services/category.service';
import { CountryService } from 'src/app/services/country.service';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-category-employers',
  templateUrl: './category-employers.component.html',
  styleUrls: ['./category-employers.component.scss']
})
export class CategoryEmployersComponent implements OnInit {
  countryCode: string;
  categorySlug: string;
  categoryName: string;
  country: Country;
  employers: Employer[];
  constructor(
    private route: ActivatedRoute, 
    private employerServ: EmployerService,
    private countryServ: CountryService,
    private categoryServ: CategoryService
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      this.countryCode = paramMap.get('countryCode');
      this.categorySlug = paramMap.get('categorySlug');

      this.categoryServ.getByCountryCodeTypeAndSlug(this.countryCode, 'Employer', this.categorySlug).subscribe(
        (category: Category) => {
          this.categoryName = category.namet ? category.namet.zh : category.name;
          if(category.country) {
            this.country = category.country;
          }
        }
      );

      this.employerServ.getAllByCountryCodeAndCategorySlug(this.countryCode, this.categorySlug).subscribe(
        (employers: Employer[]) => {
          this.employers = employers;
        }
      );

    });
  }

}
