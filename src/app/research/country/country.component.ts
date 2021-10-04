import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/interfaces/country.interface';
import { ParamMap } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  code: string;
  country: Country;
  items = [];
  constructor(
    private route: ActivatedRoute,
    private countryServ: CountryService
    ) { }

  ngOnInit(): void {
    console.log('nbegin');
    this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.code=params.get('countryCode');  
      this.countryServ.getByCode(this.code).subscribe(
        (country: Country) => {
          this.country = country;
        }
      );
    });
  }

}
