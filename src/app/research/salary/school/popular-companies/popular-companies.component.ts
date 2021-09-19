import { Component, OnInit, Input } from '@angular/core';
import { School } from 'src/app/interfaces/school.interface';

@Component({
  selector: 'app-popular-companies',
  templateUrl: './popular-companies.component.html',
  styleUrls: [
    './popular-companies.component.scss',
    '../../../../../assets/css/salary/a4f25d4089272f5a54e9.css'
  ]
})
export class PopularCompaniesComponent implements OnInit {
  @Input() school: School;
  constructor() { }

  ngOnInit(): void {
  }

  getUrl(url) {
    return url.replace('=', '%3D');
  }  
}
