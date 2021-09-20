import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/country.interface';
import { Degree } from 'src/app/interfaces/degree.interface';
import { CategoryService } from 'src/app/services/category.service';
import { CountryService } from 'src/app/services/country.service';
import { DegreeService } from 'src/app/services/degree.service';

@Component({
  selector: 'app-category-degrees',
  templateUrl: './category-degrees.component.html',
  styleUrls: ['./category-degrees.component.scss']
})
export class CategoryDegreesComponent implements OnInit {
  countryCode: string;
  categorySlug: string;
  categoryName: string;
  country: Country;
  degrees: Degree[];
  constructor(
    private route: ActivatedRoute, 
    private degreeServ: DegreeService,
    private countryServ: CountryService,
    private categoryServ: CategoryService
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
      
      this.categoryName = this.categorySlug.split('-').join(' ');

      this.degreeServ.getAllByCountryCodeAndCategorySlug(this.countryCode, this.categorySlug).subscribe(
        (degrees: Degree[]) => {
          this.degrees = degrees;
          console.log('degrees=', degrees);
        }
      );

    });
  }

}
