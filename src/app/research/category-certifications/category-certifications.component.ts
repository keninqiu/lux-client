import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/country.interface';
import { Certification } from 'src/app/interfaces/certification.interface';
import { CountryService } from 'src/app/services/country.service';
import { CertificationService } from 'src/app/services/certification.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interfaces/category.interface';

@Component({
  selector: 'app-category-certifications',
  templateUrl: './category-certifications.component.html',
  styleUrls: ['./category-certifications.component.scss']
})
export class CategoryCertificationsComponent implements OnInit {
  countryCode: string;
  categorySlug: string;
  categoryName: string;
  country: Country;
  certifications: Certification[];
  constructor(
    private route: ActivatedRoute, 
    private certificationServ: CertificationService,
    private countryServ: CountryService,
    private categoryServ: CategoryService
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      this.countryCode = paramMap.get('countryCode');
      this.categorySlug = paramMap.get('categorySlug');
      this.categoryServ.getByCountryCodeTypeAndSlug(this.countryCode, 'Certification', this.categorySlug).subscribe(
        (category: Category) => {
          this.categoryName = category.namet ? category.namet.zh : category.name;
          if(category.country) {
            this.country = category.country;
          }
        }
      );
      this.certificationServ.getAllByCountryCodeAndCategorySlug(this.countryCode, this.categorySlug).subscribe(
        (certifications: Certification[]) => {
          this.certifications = certifications;
          console.log('certifications=', certifications);
        }
      );

    });
  }

}
