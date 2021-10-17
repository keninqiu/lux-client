import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/interfaces/city.interface';
import { Country } from 'src/app/interfaces/country.interface';
import { Job } from 'src/app/interfaces/job.interface';
import { CityService } from 'src/app/services/city.service';
import { CountryService } from 'src/app/services/country.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: [
    './job.component.scss'
  ]
})
export class JobComponent implements OnInit {
  countries: Country[];
  cities: City[];
  jobs: Job[];
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

  _cityName: string;
  get cityName(): string {
    return this._cityName;
  }
  set cityName(val: string) {
    this._cityName = val;
    if(val) {
      val = val.split(',')[0];
      this.cityServ.getByName(this._countryName, val).subscribe(
        (cities: City[]) => {
          this.cities = cities;
        }
      );
    }
  }

  _name: string;
  get name(): string {
    return this._name;
  }
  set name(val: string) {
    this._name = val;
    if(val) {
      this.jobServ.getByName(this._countryName, val).subscribe(
        (jobs: Job[]) => {
          this.jobs = jobs;
        }
      );
    }
  }

  selectCountry(country: Country) {
    this._countryName = country.namet.zh;
    this.countries = [];
  }

  selectCity(city: City) {
    this._cityName = city.namet.zh + ', ' + city.state.namet.zh;
    this.cities = [];
  }

  selectJob(job: Job) {
    this._name = (job.namet && job.namet.zh) ? job.namet.zh : job.name;
    this.jobs = [];
  }

  editCountry: boolean;
  constructor(
    private jobServ: JobService,
    private cityServ: CityService,
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
