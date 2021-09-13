import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-browse-countries',
  templateUrl: './browse.component.html',
  styleUrls: [
    './browse.component.scss',
    '../../../../assets/css/research/b6cbeee7ac13b649876b.css', 
    '../../../../assets/css/research/c6918d55796febf9ef19.css', 
    '../../../../assets/css/research/d0672ccc0254cae98d85.css' 
  ]
})
export class BrowseCountriesComponent implements OnInit {
  countries: Country[];
  constructor(private coutryServ: CountryService) { }

  ngOnInit(): void {
    this.coutryServ.getAll().subscribe(
      (countries: Country[]) => {
        this.countries = countries;
      }
    );
  }

}
