import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/country.interface';
import { School } from 'src/app/interfaces/school.interface';
import { CountryService } from 'src/app/services/country.service';
import { SchoolService } from 'src/app/services/school.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interfaces/category.interface';
@Component({
  selector: 'app-category-schools',
  templateUrl: './category-schools.component.html',
  styleUrls: ['./category-schools.component.scss']
})
export class CategorySchoolsComponent implements OnInit {
  countryCode: string;
  categorySlug: string;
  categoryName: string;
  country: Country;
  schools: School[];
  constructor(
    private route: ActivatedRoute, 
    private schoolServ: SchoolService,
    private countryServ: CountryService,
    private categoryServ: CategoryService
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      this.countryCode = paramMap.get('countryCode');
      this.categorySlug = paramMap.get('categorySlug');
      this.categoryServ.getByCountryCodeTypeAndSlug(this.countryCode, 'School', this.categorySlug).subscribe(
        (category: Category) => {
          if(category) {
            this.categoryName = category.namet ? category.namet.zh : category.name;
            if(category.country) {
              this.country = category.country;
            }
          }

        }
      );
      this.schoolServ.getAllByCountryCodeAndCategorySlug(this.countryCode, this.categorySlug).subscribe(
        (schools: School[]) => {
          this.schools = schools;
          console.log('schools=', schools);
        }
      );

    });
  }

}
