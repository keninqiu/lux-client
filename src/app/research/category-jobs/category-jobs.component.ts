import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/country.interface';
import { Job } from 'src/app/interfaces/job.interface';
import { CategoryService } from 'src/app/services/category.service';
import { CountryService } from 'src/app/services/country.service';
import { JobService } from 'src/app/services/job.service';
import { Category } from 'src/app/interfaces/category.interface';
@Component({
  selector: 'app-category-jobs',
  templateUrl: './category-jobs.component.html',
  styleUrls: ['./category-jobs.component.scss']
})
export class CategoryJobsComponent implements OnInit {
  countryCode: string;
  categorySlug: string;
  categoryName: string;
  country: Country;
  jobs: Job[];
  constructor(
    private route: ActivatedRoute, 
    private jobServ: JobService,
    private countryServ: CountryService,
    private categoryServ: CategoryService
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      this.countryCode = paramMap.get('countryCode');
      this.categorySlug = paramMap.get('categorySlug');
      /*
      this.countryServ.getByCode(this.countryCode).subscribe(
        (country: Country) => {
          this.country = country;
        }
      );
      
      this.categoryName = this.categorySlug.split('-').join(' ');
      */

      this.categoryServ.getByCountryCodeTypeAndSlug(this.countryCode, 'Job', this.categorySlug).subscribe(
        (category: Category) => {
          this.categoryName = category.namet ? category.namet.zh : category.name;
          if(category.country) {
            this.country = category.country;
          }
        }
      );

      this.jobServ.getAllByCountryCodeAndCategorySlug(this.countryCode, this.categorySlug).subscribe(
        (jobs: Job[]) => {
          this.jobs = jobs;
          console.log('jobs=', jobs);
        }
      );

    });
  }

}
