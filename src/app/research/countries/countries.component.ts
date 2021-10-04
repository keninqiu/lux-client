import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  items: any;
  constructor(private coutryServ: CountryService) { }

  ngOnInit(): void {
    this.coutryServ.getAll().subscribe(
      (countries: Country[]) => {
        this.items = countries.map(
          item => {
            return {
              text: item.namet ? item.namet.zh : item.name,
              url: '/research/' + item.code + '/Salary'
            }
          }
        );
      }
    );
  }

}
