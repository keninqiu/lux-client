import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/country.interface';
import { Certification } from 'src/app/interfaces/certification.interface';
import { CountryService } from 'src/app/services/country.service';
import { CertificationService } from 'src/app/services/certification.service';

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
      this.categoryName = this.categorySlug.split('-').join(' ');
      this.certificationServ.getAllByCountryCodeAndCategorySlug(this.countryCode, this.categorySlug).subscribe(
        (certifications: Certification[]) => {
          this.certifications = certifications;
          console.log('certifications=', certifications);
        }
      );

    });
  }

}
