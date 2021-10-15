import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/interfaces/country.interface';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: [
    './job.component.scss'
  ]
})
export class JobComponent implements OnInit {
  countries: Country[];
  _countryName: string;
  get countryName(): string {
    return this._countryName;
  }
  set countryName(val: string) {
    this._countryName = val;
    if(val) {
      this.countryServ.getByName(val).subscribe(
        (countries: Country[]) => {
          this.countries = countries;
        }
      );
    }

  }

  selectCountry(country: Country) {
    this._countryName = country.namet.zh;
    this.countries = [];
  }
  editCountry: boolean;
  constructor(
    private countryServ: CountryService,
    private router: Router) { }

  ngOnInit(): void {
    this._countryName = '中国';
    this.editCountry = false;
  }

  next() {
    this.router.navigate(['/survey/compensation']);
  }


}
