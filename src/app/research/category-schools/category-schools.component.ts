import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/country.interface';
import { School } from 'src/app/interfaces/school.interface';
import { CountryService } from 'src/app/services/country.service';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-category-schools',
  templateUrl: './category-schools.component.html',
  styleUrls: ['./category-schools.component.scss']
})
export class CategorySchoolsComponent implements OnInit {
  countryCode: string;
  categorySlug: string;
  country: Country;
  schools: School[];
  constructor(
    private route: ActivatedRoute, 
    private schoolServ: SchoolService,
    private countryServ: CountryService
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      this.countryCode = paramMap.get('countryCode');
      this.categorySlug = paramMap.get('categorySlug');
      this.countryServ.getByCode(this.countryCode).subscribe(
        (country: Country) => {
          this.country = country;
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
